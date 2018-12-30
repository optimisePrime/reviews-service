const React = require('react');

const AverageReviews = function (props) {
  let starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/onestar.png';
  const score = props.averageScore;
  if (score >= 2 && score < 2.3){
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/twostar.png';
  } else if (score >= 2.3 && score < 2.7) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/twohalfstar.png';
  } else if (score >= 2.7 && score < 3.3) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/threestar.png';
  } else if (score >=3.3 && score < 3.7) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/threehalfstar.png';
  } else if (score >= 3.7 && score < 4.3) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/fourstar.png';
  } else if (score >= 4.3 && score < 4.7) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/fourhalfstar.png';
  } else if (score >= 4.7) {
    starUrl = 'https://s3.us-east-2.amazonaws.com/publicreviewsmodule/fivestar.png';
  }
  return (
    <div className="reviewMenu">
      <div className="reviewMenuHeader">{props.numberReviews} customer reviews</div>
      <div className="averageReviewsStarArea">
        <div className="averageReviewStarBorderr">
        <img className="averageStars" src={starUrl}></img>
        <div className="averageReviewsStarText">{props.averageScore} out of 5 stars</div>
        </div>
      </div>
      <table className="reviewRatingBars">
      <tbody>
        <tr className="reviewBarWrapper" onClick={function(){ props.numberStarsClick(5) }}>
          <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">5 star</div>
          </span>
          <span className="ratingBarCell">
            <div className="outerRatingBar">
              <div className="innerRatingBar" style={{ width: (((props.numberStars[5] / props.numberReviews) * 100).toString() + "%") }}></div>
            </div>
          </span>
          <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">{(((props.numberStars[5] / props.numberReviews) * 100).toString() + "%")}</div>
          </span>
        </tr>
          <tr className="reviewBarWrapper" onClick={function () { props.numberStarsClick(4) }}>
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">4 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: (((props.numberStars[4] / props.numberReviews) * 100).toString() + "%") }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">{(((props.numberStars[4] / props.numberReviews) * 100).toString() + "%")}</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper" onClick={function () { props.numberStarsClick(3) }}>
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">3 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: (((props.numberStars[3] / props.numberReviews) * 100).toString() + "%") }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">{(((props.numberStars[3] / props.numberReviews) * 100).toString() + "%")}</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper" onClick={function () { props.numberStarsClick(2) }}>
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">2 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: (((props.numberStars[2] / props.numberReviews) * 100).toString() + "%") }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">{(((props.numberStars[2] / props.numberReviews) * 100).toString() + "%")}</div>
            </span>
          </tr>
          <tr className="reviewBarWrapper" onClick={function () { props.numberStarsClick(1) }}>
            <span className="ratingBarLeftTextBox">
              <div className="ratingBarLeftText">1 star</div>
            </span>
            <span className="ratingBarCell">
              <div className="outerRatingBar">
                <div className="innerRatingBar" style={{ width: (((props.numberStars[1] / props.numberReviews) * 100).toString() + "%") }}></div>
              </div>
            </span>
            <span className="ratingBarRightTextBox">
              <div className="ratingBarRightText">{(((props.numberStars[1] / props.numberReviews) * 100).toString() + "%")}</div>
            </span>
          </tr>
      </tbody>
      </table>
      <hr className="reviewBorderLine" style={{marginTop: "22px", marginBottom: "22px"}}></hr>
      <h3 className="addReviewHeader">Review this product</h3>
      <div className="addReviewBody">Share your thoughts with other customers</div>
      <div className="addReviewButtonWrapper">
      <div className="addReviewButtonOuter">
      <div className="addReviewButtonInner">Write a customer review</div>
      </div>
      </div>
    </div>
  )
}

module.exports = AverageReviews;
