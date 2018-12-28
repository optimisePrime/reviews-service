const React = require('react');

const AverageReviews = function (props) {
  return (
    <div className="reviewMenu">
      <div className="reviewMenuHeader"># customer reviews</div>
      <div className="averageReviewsStarArea">
        <div className="averageReviewStarBorderr">
        <img className="averageStars" src="https://s3.us-east-2.amazonaws.com/publicreviewsmodule/fivestar.png"></img>
        <div className="averageReviewsStarText">5 out of 5 stars</div>
        </div>
      </div>
    </div>
  )
}

module.exports = AverageReviews;
