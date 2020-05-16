import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

// if (process.env.NODE_ENV !== 'dev') {
if (process.env.REACT_APP_ENVIRONMENT !== 'prod') {
  localStorage.setItem('debug', 'thesource:*')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
