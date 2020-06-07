import {
  action,
  observable,
  // spy,
} from 'mobx'
import { message } from 'antd'
import Log from '../utils/logger'

class GlobalStore {
  @observable currentPath = '/'

  @action move(path = '/') {
    message.info(`Moved to ${path}`)
    this.currentPath = path
  }

  @action reset() {
    this.currentPath = '/'
  }

  constructor() {
    Log.trace(this)
    this.currentPath = window.location.pathname
  }
}

const globalStore = new GlobalStore()
// MUSTFIX: Try another way to update currentPath store;
// Spy only works in development mode
// spy((event) => {
//   if (event.type === 'action' && event.name === '_updateLocation') {
//     Log.info('Event', event)
//     globalStore.move(event.arguments[0].pathname)
//   }
// })
export default globalStore
