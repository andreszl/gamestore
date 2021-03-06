import React , { Component } from 'react'
// import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'


class SignIn extends Component {
	constructor(props){
		super(props)
		this.state = {
			email:'',
			password:'',
			error: {
				message:''
			}

		}
	}

	signIn() {
		const { email , password} = this.state
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
		.catch( error => {
			this.setState({error})
		})
		
		// console.log('this.state', this.state)
	}
	render(){ 
		return(
			<div className="form-inline">
				<h2>Sign In</h2>
				<div className="form-group ">
					<input 
						className="form-control"
						type="text"
						placeholder="email"
						onChange={ event => this.setState({email: event.target.value})}

					 />
					 <input 
					 	className="form-control"
					 	type="password"
					 	placeholder="password"
					 	onChange={ event => this.setState({password: event.target.value})}
					 />
					 <button 
					 	className="btn btn-primary"
					 	type="button"
					 	onClick={() => this.signIn()}
					 >
					 	Sign In 
					 </button> 
					<div className=""> { this.state.error.message } </div>
					{/*<div><Link to={'/signup'}>Sign Up instead </Link></div>*/}
				</div>
			</div>
		)
	}
}


export default connect(null, null )(SignIn)