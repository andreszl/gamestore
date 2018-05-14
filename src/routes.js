import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import App from './components/App'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar'
import Game from './components/Game'
import ShoppingCart from './components/ShoppingCart'

class Routes extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	

	render(){
		const UserRoute = ({ component: Component, ...rest}) => (
			<Route {...rest} render={ (props) => (
				this.props.auth.access 
					? this.props.auth.isAuthenticated 
						? <Component {...props} /> 
						: <Redirect to={{
							pathname:'/',
							state: { from: props.location, success:false }
						}} />
					: null
			)} />
		)

		const GuestRoute = ({ component: Component, ...rest}) => (
			<Route {...rest} render={ (props) => (
					this.props.auth.access
						? this.props.auth.isAuthenticated === false
							? <Component {...props} />
							: <Redirect to='/dashboard' />
						: null
			)} />
		)



		return(
			<Router>
				<div>
					<NavigationBar />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<GuestRoute path="/signup" component={SignUp} />
						<GuestRoute path="/signin" component={SignIn} />
						<UserRoute path="/dashboard"  component={App}/>
						<UserRoute path='/profile' component={App} />
						<UserRoute path='/my-shopping-car' component={ShoppingCart} />
						<Route path='/game/:slug/'  component={Game} />
					</Switch>
				</div>
			</Router>
		)
	}

}

function mapStateToProps(state){
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, null )(Routes)