const React = require('react');

const Stars = function(props) {
  for (let i = 0; i < props.starRating; i += 1) {
      
  }
  let starLine = props.stars.map((star) => {
      return (
          <img src={star.type}></div>
      );
  });
  return (
    {
      starLine
    }
  )
}

module.exports = Stars;
