const React = require('react');
const ReactDOM = require('react-dom');
const AverageReviews = require('./average_reviews');

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			averageScore: 0,
			numberStars: {
				1:0,
				2:0,
				3:0,
				4:0,
				5:0,
			},
		}
		this.handleNumberStarsClick = this.handleNumberStarsClick.bind(this);
  }

  componentDidMount(){
		fetch('http://127.0.0.1:3001/reviews').then((data)=>{
			data.json().then((results)=>{
				let newState = Object.assign({}, this.state);
				for (let i = 0; i < results.length; i++){
					newState.reviews.push(results[i]);
					newState.averageScore += results[i].score;
					newState.numberStars[results[i].score] += 1;
				}
				newState.averageScore = newState.averageScore / newState.reviews.length;
				console.log(newState);
				this.setState(newState);
			})
		})
	}
	
	handleNumberStarsClick(value){
		console.log(value);
	}
  render(){
    return(
      <div className="mainApp">
        <hr className="reviewBorderLine"></hr>
		<div className="reviewGrid">	
		  <div className="leftReviewGrid">
		    <AverageReviews numberStarsClick={this.handleNumberStarsClick} averageScore={this.state.averageScore} numberStars={this.state.numberStars} numberReviews={this.state.reviews.length}/>
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
