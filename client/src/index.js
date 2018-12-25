const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="mainApp">
        <hr className="reviewBorderLine"></hr>
		<div className="reviewGrid">	
		  <div className="leftReviewGrid">
		    Tommy Hilfiger Men's
		    <hr className="reviewBorderLine"></hr>
		    Tommy Hilfiger Men's
		    <hr className="reviewBorderLine"></hr>
		    <div className="starBorder">
						<img src="https://s3.us-east-2.amazonaws.com/publicreviewsmodule/half-star.png"></img>
		      <div className="star"></div>
		      <div className="star"></div>
		      <div className="star"></div>
		    </div>
		  </div>
		  <div className="rightReviewGrid">
		    Tommy Hilfiger Men's
		  </div>
		</div>
	  </div>
		)
	}
}

module.exports = App;
