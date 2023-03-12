import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import './index.css'

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
)
