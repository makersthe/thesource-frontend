import React from 'react'
import { Menu } from 'antd'

import { contentNames } from '../../data/contentTypes'

const menuItems = Object.entries(contentNames).map((item) => (
  <Menu.Item key={item[0]}>{item[1]}</Menu.Item>
))

const Gnb = () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['video']}>
      {menuItems}
    </Menu>
  )
}

export default Gnb
