import { ADD_DATE } from '../constants'


const dataDate = (action) => {
	return {
		id: Math.random(),
		value: action.value
	}
}

const date = (state = [], action) => {
	let date = null
	switch(action.type){
		case ADD_DATE:
			date = [dataDate(action)]
			console.log('date as state in store', action)
			return date
		default:
			return state
	}
}


export default date