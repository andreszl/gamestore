import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTheme } from '../actions'

class Themes extends Component{
	constructor(props){
		super(props)
		this.state = {
			themes : []
		}
	}

	componentDidMount(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = 'https://api-2445582011268.apicast.io/themes/?fields=id,name'
		fetch(proxyurl + url,{
			method:'GET',
			headers: {
				'user-key':'ed2555b4a47b0221ebc5c9954336d691',
				 Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			const themes = json 
			this.setState({themes})
		})
		.catch( (err) => {
			console.log(err)
		})
	}

	addTheme(event){

		let select = document.getElementById('themes')
		let text = select.options[select.selectedIndex].text
		this.props.addTheme(text, event.target.value)
		
	}

	render(){
		return(
			<select id='themes' onChange={this.addTheme.bind(this)}>
				<option value='&'>All Themes</option>
				{
					this.state.themes.map((theme, key) => {
						return(
							<option key={key} value={"filter[themes][eq]="+theme.id}>{theme.name}</option>
						)
					})
				}
			</select>
		)
	}
}

function mapStateToProps(state){
	return {
		theme: state
	}
}


export default connect(mapStateToProps, { addTheme })(Themes)



