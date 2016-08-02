import React, { Component } from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (true) {
			return (
				<Home />
			)
		} else {
			return (
				<Login />
			)
		}
	}
}

export default App;

// <Router history={browserHistory}>
// 	<Route path="/" component={App}/>
// </Router>