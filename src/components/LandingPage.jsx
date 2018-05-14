import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchEngine from './SearchEngine'

class LandingPage extends Component{
	constructor(props){
		super(props)
		this.state = {
			access: true
		}
	}

	render(){

		if(this.props.location.state != null){
			return <Redirect to='/signin' />
		}

		return(
			<div>
				<div>LANDING PAGE</div>
				<SearchEngine />
			</div>
		)
	}
} 


export default LandingPage