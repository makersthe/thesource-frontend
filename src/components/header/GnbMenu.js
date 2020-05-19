import React from 'react'
import { Menu } from 'antd'

import Logger from '../../utils/logger'
import { contentNames } from '../../data/contentTypes'

const menuItems = Object.entries(contentNames).map((item) => (
  <Menu.Item key={item[0]}>{item[1]}</Menu.Item>
))

class Gnb extends React.Component {
  render() {
    Logger.info('Gnb.js:render()', this)
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['video']}>
        {menuItems}
      </Menu>
    )
  }
}

export default Gnb
