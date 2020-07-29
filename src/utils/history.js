import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import ReactGA from 'react-ga'

const browserHistory = createBrowserHistory()
export const routingStore = new RouterStore()
export const history = syncHistoryWithStore(browserHistory, routingStore)

ReactGA.initialize('UA-173488034-1', {
  debug: true,
  // debug: false,
  titleCase: false,
  // gaOptions: {
  //   userId: 123,
  // },
  gaAddress: 'https://ssl.google-analytics.com/ga.js',
})

// history.listen(() => {
//   window.location.hash.substring(2)
history.listen((location) => {
  ReactGA.pageview(location.pathname + location.search)
})

export default history
