import React from 'react'
import { inject, observer } from 'mobx-react'

import { Menu } from 'antd'

import { routes } from '../../data/routes'

const Gnb = inject('routingStore')(
  observer((props) => {
    const { push } = props.routingStore

    const menuItems = routes.map((item) => (
      <Menu.Item key={item.url} onClick={() => push(item.url)}>
        {item.name}
      </Menu.Item>
    ))

    return (
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['']}>
        {menuItems}
      </Menu>
    )
  }),
)

export default Gnb
