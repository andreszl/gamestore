import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { addDate } from '../actions'
 
import release_dates from '../data/release_dates'

class ReleaseDates extends Component{

	constructor(props){
		super(props)
		this.state = {
			release_dates:[]
		}
	}

	componentDidMount(){

		this.setState({release_dates})		
	}

	addDate(event){
		
		console.log(this.props)
		this.props.addDate(event.target.value)
	}

	render(){
		return(
			<select id='dates' onChange={this.addDate.bind(this)}>
				<option value='&'>All Dates</option>
				{
					release_dates.map((date, key) => {
						return (
							<option key={key} value={"&filter[release_dates.y][eq]="+date.year+"&"}>{date.year}</option>
						)
					})
				}
			</select>
		)
	}
}
function mapStateToProps(state){
	return {
		date:state
	}
}

export default connect(mapStateToProps, {addDate })(ReleaseDates)