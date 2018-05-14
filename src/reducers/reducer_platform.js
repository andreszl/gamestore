import { ADD_PLATFORM } from '../constants'

const dataPlatform = (action) => {
	return {
		id: Math.random(),
		name: action.name,
		value: action.id
	}
}

const platform = (state = [], action) => {
	let platform = null
	switch(action.type){
		case ADD_PLATFORM:
			platform = [dataPlatform(action)]
			console.log('platform as state in store', platform)
			return platform
		default:
			return state
	}
}


export default platform