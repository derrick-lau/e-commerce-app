from db import db
import datetime

class WishList(db.Model):
    __tablename__ = "wishLists"

    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User")
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), unique=True)
    wishListProducts = db.relationship("WishListProduct", lazy="dynamic")

    def __init__(self, userId):
        self.userId = userId

    def json(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "wishListProducts": [wishListProduct.json() for wishListProduct in self.wishListProducts.all()],
        }

    @classmethod
    def findById(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def findByUserId(cls, _id):
        return cls.query.filter_by(userId=_id).first()

    @classmethod
    def findAll(cls):
        return cls.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
