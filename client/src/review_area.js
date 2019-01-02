const React = require('react');
const ReviewList = require('./review_list')

const ReviewArea = function (props) {
    return (
        <div className="reviewAreaContainer">
            <ReviewList handleSort={props.handleSort} reviews={props.reviews} limited={props.limited} extend={props.extend} />
        </div>
    )
}

module.exports = ReviewArea;