import { action, observable } from 'mobx'
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
export default globalStore
