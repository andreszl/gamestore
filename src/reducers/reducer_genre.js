import { ADD_GENRE } from '../constants'

const dataGenre = (action) => {
	return {
		id: Math.random(),
		name: action.name,
		value: action.value
	}
}


const genre = (state = [], action) => {
	let genre = null
	switch(action.type){
		case ADD_GENRE:
			genre = [...state,dataGenre(action)]
			console.log('genre as state in store', genre)
			return genre
		default :
			return state
	}
}


export default genre