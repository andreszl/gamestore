import React from 'react'
import { render } from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
import { firebaseApp } from './firebase' 
import { applyMiddleware } from 'redux'
import reducer from './reducers'
import { logUser, addGame } from './actions' 
import Routes from './routes'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		user = user
	}else{
		user = false
	}
	
	store.dispatch(logUser(user))

})



render(
	<Provider store={store}>
		 <Routes history={history} />
	</Provider>,
	document.getElementById('root')
)