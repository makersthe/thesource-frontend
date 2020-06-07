import React from 'react'

import { Avatar } from 'antd'
import { css } from 'emotion'

import Logger from '../../utils/logger'

class GnbUser extends React.Component {
  render() {
    Logger.info('GnbUser.js:render()', this)
    return (
      <div
        className={css`
          display: flex;
          justify-contents: flex-end;
        `}
      >
        <Avatar>U</Avatar>
      </div>
    )
  }
}

export default GnbUser
