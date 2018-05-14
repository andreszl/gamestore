import React, { Component } from 'react'
import { connect } from 'react-redux'


class ShoppingCart extends Component{
	render(){
		console.log(this.props.shoppingCart)
		return (
			<div>Shpping Cart </div>
			
		)
	}
}

function mapStateToProps(state){
	return {
		shoppingCart: state.games 
	}
}

export default connect(mapStateToProps, null )(ShoppingCart)