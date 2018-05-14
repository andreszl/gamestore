import {combineReducers} from 'redux'

import genre from './reducer_genre'
import platform from './reducer_platform'
import theme from './reducer_theme'
import date from './reducer_date'
import auth from './reducer_auth'
import games from './reducer_games'
export default combineReducers({
	genre,
	platform,
	theme,
	date,
	auth,
	games
})