import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categoriesReducer'
import productsReducer from '../reducers/productsReducer'

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    products: productsReducer
  }),
  applyMiddleware(thunk)
)

store.subscribe(() => {
  console.log('store data:', store.getState())
})

export default store
