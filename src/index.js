import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Disable logging in production
if (process.env.REACT_APP_ENVIRONMENT !== 'prod') {
  localStorage.setItem('debug', 'thesource:*')
}

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  document.getElementById('root'),
)

serviceWorker.unregister()
