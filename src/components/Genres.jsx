import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addGenre } from '../actions'

class Genres extends Component{
	constructor(props){
		super(props)
		this.state= {
			genres:[]
		}
	}

	componentDidMount(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = 'https://api-2445582011268.apicast.io/genres/?fields=name&limit=50'
		fetch(proxyurl + url,{
			method:'GET',
			headers: {
				'user-key':'ed2555b4a47b0221ebc5c9954336d691',
				 Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			const genres = json 
			this.setState({genres})
		})
		.catch( (err) => {
			console.log(err)
		})
	}

	addGenre(event){
		let select = document.getElementById('genres')
		let text = select.options[select.selectedIndex].text
		this.props.addGenre(text,event.target.value)
	}

	render(){
		return(
			<select id='genres' onChange={this.addGenre.bind(this)}>
				<option value='&'> All Genres </option>
				{
					this.state.genres.map((genre, key) => {
						return(
							<option key={key} value={"&filter[genres][eq]="+genre.id+"&"}> {genre.name} </option>
						)
					})
				}
			</select>
		)
	}
}

function mapStateToProps(state){
	return {
		genre: state
	}
}


export default connect(mapStateToProps, { addGenre })(Genres)