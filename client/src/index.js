var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div>first react component</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));