import React from 'react'
import { Button } from 'antd'
import Logger from './utils/logger'

class App extends React.Component {
  componentDidMount() {
    Logger.info('App.js:componentDidMount()', this)
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
