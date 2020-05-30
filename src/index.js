import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { configure as MobXConfig } from 'mobx'
import { Provider } from 'mobx-react'
import globalStore from './stores/globalStore'
import { history, routingStore } from './utils/history'

import App from './App'

import './assets/less/index.less'

import * as serviceWorker from './serviceWorker'

// Disable logging in production
if (process.env.REACT_APP_ENVIRONMENT !== 'prod') {
  localStorage.setItem('debug', 'thesource:*')
}

MobXConfig({
  // cannot change state modifications outside actions
  // enforceActions: 'always',
})

// Use browserHistory rather than hashHistory

const stores = {
  globalStore,
  routingStore,
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
