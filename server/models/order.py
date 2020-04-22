from db import db
import datetime

class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    createAt = db.Colum(db.DateTime, default=datetime.datetime.utcnow)
    isPaid = db.Colum(db.Boolean, default=False)
    orderProducts = db.relationship("OrderProduct", lazy="dynamic")

    def __init__(self, createAt):
        self.createAt = createAt

    def json(self):
        return {
            "id": self.id,
            "createAt": self.createAt,
            "isPaid": self.isPaid,
            "orderProducts": [orderProduct.json() for orderProduct in self.orderProducts.all()],
        }

    @classmethod
    def findById(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_all(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
