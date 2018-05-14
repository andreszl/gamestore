import React, { Component } from 'react'
import { connect } from 'react-redux'

import Album from './Album'
import Genres from './Genres'
import Platforms from './Platforms'
import Themes from './Themes'
import ReleaseDates from './ReleaseDates'

class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			query: '',
			genre: {
				name:'',
				value: '&'
			},
			platform:{
				name:'',
				value:'&'
			},
			theme:{
				name:'',
				value:'&'
			},
			date:{
				value:'&',
				id:''
			}
		}
	}

	componentWillReceiveProps(props){
		
		props.data.genre.map(g => {	
			this.setState({genre:{name: g.name, value: g.value}})
			return(null)
		})

		props.data.platform.map(p => {	
			this.setState({platform:{name: p.name, value: p.value}})
			return(null)
		})
		props.data.theme.map(t => {
			this.setState({theme:{name:t.name, value: t.value}})
			return(null)
		})

		props.data.date.map(d => {
			this.setState({date:{value:d.value, id: d.id}})
			return(null)
		})
	
	}

	render(){
		return(
			<div>
				<form onSubmit={event => event.preventDefault()}>
					<div>
						<input 
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.setState({query: event.target.value})	
								}
							}}
							type="text"
						/>
						<Platforms />
						<Genres />
						<Themes />
						<ReleaseDates />
					</div>
				</form>
				<Album search={this.state}  />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		data: state
	}
}

export default connect(mapStateToProps, null)(App)