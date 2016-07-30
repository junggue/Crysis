import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		
		return (

			<div>
				<div>
					<h1>Crysis</h1>
				</div>

				<div className="LoginForm">
					<form>
		        		<div>
		          			<label>Username</label>
		      				<div>
		        				<input type="text" placeholder="Username" />
		      				</div>
		        		</div>

		        		<div>
		          			<label>Password</label>
		      				<div>
		        				<input type="text" placeholder="Password" />
		      				</div>
		        		</div>
		        
		        		<div>
		          		<button type="submit" >
		            		Login
		          		</button>
		          		<button type="button">
		            		New Organization
		          		</button>
		        		</div>
		    		</form>
	    		</div>
	    	</div>
		)
	}
}

// Login.propTypes = {
//   fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   resetForm: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired
// }

export default Login;