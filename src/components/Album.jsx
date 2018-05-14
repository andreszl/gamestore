import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addGame } from '../actions'

class Album extends Component{
	constructor(props){
		super(props)
		this.state = {
			games:[{}]
		}
	}

	componentWillReceiveProps(props){
		console.log(props)
		this.setState({games:[{row:'Cargando...'}]})
		this.setState({cover:''})
		
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = `https://api-2445582011268.apicast.io/games/?search=${props.search.query}${props.search.genre.value}${props.search.platform.value}${props.search.theme.value}${props.search.date.value}&fields=*&limit=20`
		fetch(proxyurl + url,{
			method:'GET',
			headers: {
				'user-key':'ed2555b4a47b0221ebc5c9954336d691',
				 Accept: 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			const games = json 
			if(games.length <= 0){
				 this.setState({games:[{row:'No se Encontraron Registros...'}]})
				 this.setState({cover:"http://3.bp.blogspot.com/-Wjlk37UZJt8/TVR06PsM6rI/AAAAAAAAAK0/xMdkrYY9M2A/s400/muypronto.gif"})
			}else{
				 this.setState({games})
				 this.setState({cover:"http://3.bp.blogspot.com/-Wjlk37UZJt8/TVR06PsM6rI/AAAAAAAAAK0/xMdkrYY9M2A/s400/muypronto.gif"})	 
			}
		})
		.catch( (err) => {
			console.log(err)
		})
	}

	render(){
		return(
			<div>
				{

					this.state.games.map((game, key) => {
						{
							if(game.name != null){
								return (
									<div key={key}>
										<Link target="_blank" to={{
											pathname:`/game/${game.slug}`,
											data:{id:game.id, name: game.name}

										}}>
										<h3>{game.name}</h3></Link>
										
										<div>
											{
												game.hasOwnProperty('cover') ? <img alt={game.name} title={game.name}  src={game.cover.url}/>
													: <img alt={game.name} title={game.name} src={this.state.cover} />
											}
											 <div onClick={ event => {
											 	
											 	this.props.auth.access 
													? this.props.auth.isAuthenticated 
														? this.props.addGame(game) 
														: alert('debes logearte')
													:null
											 	}
											 }>
											 		Add shopping cart
											 	</div>
										</div>		
									</div>
								)
							}else{
								return <div key={key}>{game.row}</div>
							}
							
						}
					})
				}
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		auth: state.auth
	}
}

export default connect( mapStateToProps, { addGame })(Album)