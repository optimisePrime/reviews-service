const React = require('react');

const Stars = function(props) {
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
