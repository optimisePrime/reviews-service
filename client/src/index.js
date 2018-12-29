const React = require('react');
const ReactDOM = require('react-dom');
const AverageReviews = require('./average_reviews');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
	  fetch('')
  }
  render(){
    return(
      <div className="mainApp">
        <hr className="reviewBorderLine"></hr>
		<div className="reviewGrid">	
		  <div className="leftReviewGrid">
		    <AverageReviews />
		  </div>
		  <div className="rightReviewGrid">
		    Tommy Hilfiger Men's
		  </div>
		</div>
	  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

module.exports = App;
