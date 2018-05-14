import { ADD_GAME,ADD_GENRE, ADD_PLATFORM, ADD_THEME, ADD_DATE, USER_AUTH } from '../constants'

export function addGenre(name, value){
	const action = {
		type: ADD_GENRE,
		name,
		value
	}
	console.log('action in addGenre', action)
	return action
}


export function addPlatform(id, name){
	const action = {
		type: ADD_PLATFORM,
		id,
		name
	}
	console.log('action in addPlatform', action)
	return action 
}


export function addTheme(name, value){
	const action = {
		type: ADD_THEME,
		name,
		value
	}
	console.log('action in addTheme', action)
	return action
} 


export function addDate(value){
	const action = {
		type: ADD_DATE,
		value
	}
	console.log('action in addDate', action)
	return action
}

export function logUser(user){
	const action = {
		type: USER_AUTH,
		user
	}
	console.log('action in userAuth', action)
	return action
}

export function addGame(game){
	const action = {
		type: ADD_GAME,
		game
	}
	console.log('action in addGame', action)
	return action
}

