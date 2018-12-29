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
      <table className="reviewRatingBars">
      <tbody>
        <tr className="reviewBarWrapper">
          <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">5 star</div>
          </span>
          <span className="ratingBarCell">
            <div className="outerRatingBar">
              <div className="innerRatingBar" style={{ width: "50%" }}></div>
            </div>
          </span>
          <span className="ratingBarRightTextBox">
            <div className="ratingBarRightText">50%</div>
          </span>
        </tr>
          <tr className="reviewBarWrapper">
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">4 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: "50%" }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">50%</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper">
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">3 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: "50%" }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">50%</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper">
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">2 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: "50%" }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">50%</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper">
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">1 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: "50%" }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">50%</div>
            </span>
          </tr>
      </tbody>
      </table>
      <hr className="reviewBorderLine" style={{marginTop: "22px", marginBottom: "22px"}}></hr>
      <h3 className="addReviewHeader">Review this product</h3>
      <div className="addReviewBody">Share your thoughts with other customers</div>
    </div>
  )
}

module.exports = AverageReviews;
