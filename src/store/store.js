import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categoriesReducer'
import loadingReducer from '../reducers/loadingReducer'
import productsReducer from '../reducers/productsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    loading_info: loadingReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => {
  console.log('store data:', store.getState())
})

export default store
