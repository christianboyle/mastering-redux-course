import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import usersReducer from '../reducers/usersReducer'
import thunk from 'redux-thunk'

const store = createStore(usersReducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log('store data:', store.getState())
})

export default store
