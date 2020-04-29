from db import db
import datetime

class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User")
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    createAt = db.Column(db.String, default=datetime.datetime.utcnow)
    address = db.Column(db.String)
    payment = db.relationship("Payment", lazy="dynamic")
    orderProducts = db.relationship("OrderProduct", lazy="dynamic")

    def __init__(self, userId, address):
        self.userId = userId
        self.address = address

    def json(self):
        payment1 = self.payment.first()
        if not self.payment.first() == None:
            payment1 = payment1.json()
        return {
            "id": self.id,
            "userId": self.userId,
            "createAt": self.createAt,
            "payment": payment1,
            "address":self.address,
            "orderProducts": [orderProduct.json() for orderProduct in self.orderProducts.all()],
        }

    @classmethod
    def findById(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def findOrdersByUserId(cls, _id):
        return cls.query.filter_by(userId=_id)

    @classmethod
    def findAll(cls):
        return cls.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def getId(self):
        return self.id
