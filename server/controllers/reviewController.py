from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    get_jwt_identity,
    jwt_optional,
    fresh_jwt_required,
)
from models.review import Review


class ReviewController(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument(
        "content", type=int, required=False, help="Every Review needs a content."
    )

    parser.add_argument(
        "rate", type=str, required=True, help="Every Review needs an rate."
    )

    parser.add_argument(
        "productId", type=int, required=True, help="Every Review needs a productId."
    )

    parser.add_argument(
        "userId", type=int, required=True, help="Every Review needs a userId."
    )

    @jwt_required
    def post(self):

        props = ReviewController.parser.parse_args()

        if Review.findByProductIdAndUserId(props["productId"], props["userId"]):
            return {"message": "You already left a review"}, 400
        else:
            review = Review(**props)

        try:
            review.save()
        except:
            return {"message": "Something was wrong when creating the store."}, 500

        return review.json(), 201

    

