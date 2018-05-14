import { USER_AUTH } from '../constants'


const logUser = (action) => {
	return {
		isAuthenticated:action.user,
		access: true
	}
}

const auth = (state = { isAuthenticated: false, access: false }, action) => {
	let user= null
	switch(action.type){
		case USER_AUTH:
			user = logUser(action)
			console.log('user as state in store', user)
			return user
		default:
			return state

	}
} 

export default auth