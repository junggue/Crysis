import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (false) {
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