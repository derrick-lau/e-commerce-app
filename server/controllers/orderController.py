from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    get_jwt_identity,
    jwt_optional,
    fresh_jwt_required,
)
from models.order import Order
from models.orderProduct import OrderProduct


parser = reqparse.RequestParser()

parser.add_argument(
    "userId", type=int, required=True, help="Every order needs a storeId."
)

parser.add_argument(
    "productIdList", type=list, required=True, help="Every product needs a storeId."
)

class ExistingOrderController(Resource):

    @jwt_required
    def get(self, orderId: int):
        order = Order.findById(orderId)

        if order:
            return order.json(), 200
        else:
            return {"message": "order not found."}, 404

    @jwt_required
    def delete(self, orderId: int):

        order = Order.findById(orderId)

        if order:
            order.delete()
            return {"message": "Order deleted."}, 200
        return {"message": "Order not found."}, 404

    @jwt_required
    def put(self, orderId: int):

        order = Order.findById(orderId)
        props = parser.parse_args()

        if order:
            order.userId = props["userId"]
            order.productIdList = props["productIdList"]
        else:
            order = Order(**props)

        order.save()
        return order.json(), 200


class NewOrderController(Resource):

    @jwt_required
    def get(self):
        
        userId = get_jwt_identity()
        orders = [order.json() for order in Order.findOrdersByUserId(userId)]

        if orders:
            return {"orders": orders}, 200
        else:
            return {"message": "order not found."}, 404

    @jwt_required
    def post(self):

        props = parser.parse_args()
        userId = get_jwt_identity()

        order = Order(userId)
        productIdList = props["productIdList"]

        try:
            order.save()
            for productId in productIdList:
                orderProduct = OrderProduct(order.id, productId)
                orderProduct.save()
        except:
            return {"message": "Something was wrong when creating the order."}, 500
        
        return order.json(), 201
    

