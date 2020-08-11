import React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Menu } from 'antd'

import { routes } from '../../data/routes'

const Gnb = inject('routingStore')(
  observer((props) => {
    const menuItems = routes.map((item) => (
      <Menu.Item key={item.url}>
        <Link to={item.url}>{item.name}</Link>
      </Menu.Item>
    ))

    const pathname = props.routingStore.location.pathname
    const currentTab = `/${pathname.split('/')[1]}`

    return (
      <Menu
        className={css`
          @media only screen and (max-width: 850px) {
            display: none;
          }
        `}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[currentTab]}
        selectedKeys={[currentTab]}
      >
        {menuItems}
      </Menu>
    )
  }),
)

export default Gnb
