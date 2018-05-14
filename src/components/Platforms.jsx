import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPlatform } from '../actions'


class Platforms extends Component{
	constructor(props){
		super(props)
		this.state = {
			platforms: []
		}
	}

	componentDidMount(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = 'https://api-2445582011268.apicast.io/platforms/?fields=id,name'
		fetch(proxyurl + url,{
			method:'GET',
			headers: {
				'user-key':'ed2555b4a47b0221ebc5c9954336d691',
				 Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			const platforms = json 
			this.setState({platforms})
		})
		.catch( (err) => {
			console.log(err)
		})
	}
	
	addPlatform(event){
		let select = document.getElementById('platforms')
		let text = select.options[select.selectedIndex].text
		this.props.addPlatform(event.target.value, text)
	}

	render(){
		return(
			<select id='platforms' onChange={this.addPlatform.bind(this)}>
				<option value="&">All Platforms</option>
					{
						this.state.platforms.map((platform, key) => {
							return(
								<option key={key} value={"filter[platforms][eq]="+platform.id+"&"}>{platform.name}</option>
							)
						})
					}
			</select>
		)
	}
}

function mapStateToProps(state){
	return {
		platform: state
	}
}

export default connect(mapStateToProps, {addPlatform})(Platforms)