import React, { Component } from 'react'

class Game extends Component{
	constructor(props){
		super(props)
		this.state = {
			game:[],
			cover: "http://3.bp.blogspot.com/-Wjlk37UZJt8/TVR06PsM6rI/AAAAAAAAAK0/xMdkrYY9M2A/s400/muypronto.gif",
		}
	}
	componentDidMount(){
		console.log(this)
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = `https://api-2445582011268.apicast.io/games/?filter[slug][eq]=${this.props.match.params.slug}&fields=*`
		fetch(proxyurl + url,{
			method:'GET',
			headers: {
				'user-key':'ed2555b4a47b0221ebc5c9954336d691',
				 Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			const game = json[0] 
			this.setState({game})
		})
		.catch( (err) => {
			console.log(err)
		})
	}

	render(){
		return(
			<div>
				{this.state.game.name}
			</div>
		)
	}
}

export default Game