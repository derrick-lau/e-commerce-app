from db import db

class WishListProduct(db.Model):
    __tablename__ = "wishList_products"

    id = db.Column(db.Integer, primary_key=True)
    wishList = db.relationship("WishList")
    wishListId = db.Column(db.Integer, db.ForeignKey("wishLists.id"))
    product = db.relationship("Product")
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))

    def __init__(self, orderId, productId):
        self.orderId = orderId
        self.productId = productId

    def json(self):
        return {
            "id": self.id,
            "wishListId": self.wishListId,
            "product":self.product.findById(self.productId).json()
        }
    
    @classmethod
    def findById(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def findAll(cls):
        return cls.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
