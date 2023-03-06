import { createStore } from 'redux'
import contactReducer from '../reducers/contactReducer'

const store = createStore(contactReducer)

store.subscribe(() => {
  console.log('store', store.getState())
})

export default store
