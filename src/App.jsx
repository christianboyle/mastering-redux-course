import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux'

function App() {
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload
      case 'DECREMENT':
        return state - action.payload
      default:
        return state
    }
  }

  const loggerMiddleware = (store) => (next) => (action) => {
    console.log('action', action)
    next(action)
  }

  const middleware = applyMiddleware(loggerMiddleware)

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(middleware)

  const store = createStore(reducer, enhancer)

  store.subscribe(() => {
    console.log('current state', store.getState())
  })

  store.dispatch({
    type: 'INCREMENT',
    payload: 1
  })

  store.dispatch({
    type: 'INCREMENT',
    payload: 5
  })

  store.dispatch({
    type: 'DECREMENT',
    payload: 2
  })

  return <p>Open console to see the output</p>
}

export default App
