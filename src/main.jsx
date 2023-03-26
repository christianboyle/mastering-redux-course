import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
