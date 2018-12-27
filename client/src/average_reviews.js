const React = require('react');

const averageReviews = function (props) {
  return (
    <div className="reviewMenu">
      {props.numberOfReviews} customer reviews
      <div className="starLine">
        <Stars stars={props.averageStars}/>
      </div>
    </div>
  )
}