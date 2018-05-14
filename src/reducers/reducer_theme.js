import { ADD_THEME } from '../constants'

const dataTheme = (action) => {
	return {
		id: Math.random,
		name: action.name,
		value: action.value
	}
}


const theme = (state = [], action) => {
	let theme = null
	switch(action.type){
		case ADD_THEME:
			theme = [dataTheme(action)]
			console.log('theme as state in store', theme)
			return theme
		default:
			return state
	}
}


export default theme