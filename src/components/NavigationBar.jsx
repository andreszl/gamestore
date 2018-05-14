import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { firebaseApp } from '../firebase'

class NavigationBar extends Component{

	signOut() {
		firebaseApp.auth().signOut()

	}

	render(){
		const userLinks =  (
			<ul>
				<li><Link to="/dashboard">DASHBOARD</Link></li>
				<li><Link to='/profile'>PROFILE </Link></li>
				<li><Link to='/my-shopping-car'>SHOPPING CAR </Link></li>
				<li><a href="#" onClick={() => this.signOut()}>LOG OUT</a></li>
			</ul>
		)

		const guestLinks = (
			<ul>
				<li><Link to="/signup">SIGN UP</Link></li>
				<li><Link to="/signin">SIGN IN</Link></li>
			</ul>
		)
		
		return (
			<nav>
				<div>
					<div>
						<Link to='/'>HOME</Link>
					</div>
					<div>
						{ 
							this.props.auth.access 
								? this.props.auth.isAuthenticated 
									? userLinks 
									: guestLinks
								:null
						}
					</div>
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state){
	return {
		auth: state.auth
	}
}   

export default connect(mapStateToProps,null)(NavigationBar) 