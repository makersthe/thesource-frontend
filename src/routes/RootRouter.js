import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { history } from '../utils/history'
import { routes } from '../data/routes'

import Main from '../pages/Main'

import Log from '../utils/logger'

const Error404 = ({ location }) => {
  Log.error('Error404', location)

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <h3>{location.pathname} 에 대한 페이지를 찾을 수 없습니다.</h3>
    </div>
  )
}

@inject('globalStore')
@withRouter
@observer
class RootRouter extends React.Component {
  render() {
    Log.info('history', history)

    const global = this.props.globalStore

    const reactRouters = routes.map((item) => {
      return (
        <Route
          exact
          path={`/${item.url}`}
          render={() => {
            global.move(`/${item.url}`)
            return item.component
          }}
          key={item.url}
        />
      )
    })
    console.log(reactRouters)

    return (
      <Switch history={history}>
        <Route
          exact
          path="/"
          render={() => {
            global.move('/')
            return <Main />
          }}
        />

        {/* GNB */}
        {reactRouters}

        {/* Logout */}
        {/*
        <Route
          exact
          path="/logout"
          render={() => {
            this.props.authStore.logout()
            return <Redirect to="/" />
          }}
        />
        */}

        {/* Redirect */}
        <Route
          exact
          path="/sample"
          render={() => {
            return <Redirect to="/sample/redirection/path" />
          }}
        />

        {/* Error */}
        <Route component={Error404} />
      </Switch>
    )
  }
}

export default RootRouter
