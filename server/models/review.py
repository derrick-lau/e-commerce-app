from db import db

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, default="")
    rate = db.Column(db.Integer, default = 5)
    product = db.relationship("Product")
    user = db.relationship("User")
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __init__(self, content, rate, productId, userId):
        self.content = content
        self.rate = rate
        self.userId = userId
        self.productId = productId

    def json(self):
        return {
            "id": self.id,
            "content": self.content,
            "rate": self.rate
        }
    
    @classmethod
    def findByProductIdAndUserId(cls, productId, userId):
        return cls.query.filter_by(productId=productId, userId=userId)

    @classmethod
    def findAll(cls):
        return cls.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
