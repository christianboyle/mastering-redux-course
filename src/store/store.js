import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categoriesReducer'

const store = createStore(
  combineReducers({
    categories: categoriesReducer
  }),
  applyMiddleware(thunk)
)

store.subscribe(() => {
  console.log('store data:', store.getState())
})

export default store
