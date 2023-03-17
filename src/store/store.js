import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categoriesReducer'
import productsReducer from '../reducers/productsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    products: productsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => {
  console.log('store data:', store.getState())
})

export default store
