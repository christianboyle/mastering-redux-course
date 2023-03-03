import { legacy_createStore as createStore } from 'redux'

function App() {
  const reducer = (state = 0, action) => {
    console.log('reducer called')
    return state
  }

  const store = createStore(reducer)

  store.subscribe(() => {
    console.log('current state', store.getState())
  })
}

export default App
