import React from 'react'
import { css } from 'emotion'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

class slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <div
        className={css`
          display: none;
          @media only screen and (max-width: 600px) {
            display: flex;
            margin-top: 20px;
            float: right;
          }
        `}
      >
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          )}
        </Button>
      </div>
    )
  }
}

export default slider
