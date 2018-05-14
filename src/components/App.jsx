import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SearchEngine from './SearchEngine'

class App extends Component{
	render(){
		return(
			<Router>
					<Switch>
						<Route exact path='/dashboard' component={SearchEngine} />
						<Route path='/profile' component={SearchEngine} />
						<Route path='/my-shopping-car' component={SearchEngine} />
					</Switch>
			</Router>
		)
	}
}

function mapStateToProps(state){
	return {
		data: state
	}
}

export default connect(mapStateToProps, null)(App)
