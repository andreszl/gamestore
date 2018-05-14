import { ADD_GAME } from '../constants'


const dataGame = (action) => {
	return {
		id: Math.random(),
		game: action.game
	}
}
const games = (state=[], action) => {
	let game = null
	switch(action.type){
		case ADD_GAME:
			game = [...state,dataGame(action)]
			console.log('game as state in store', game)
			return game
		default :
			return state
	}
}

export default games