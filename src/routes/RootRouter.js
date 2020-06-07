import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { history } from '../utils/history'
import { routes } from '../data/routes'

import Main from '../pages/Gnb/Main'

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

const RootRouter = withRouter(
  inject('globalStore')(
    observer((props) => {
      Log.info('history', history, props)

      // const global = props.globalStore

      const reactRouters = routes.map((item) => {
        return (
          <Route
            key={item.url}
            exact
            path={`/${item.url}`}
            render={() => {
              // global.move(`/${item.url}`)
              return item.component
            }}
          />
        )
      })

      return (
        <Switch history={history}>
          <Route
            exact
            path="/"
            key="/"
            render={() => {
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
            props.authStore.logout()
            return <Redirect to="/" />
          }}
        />
        */}

          {/* Redirect */}
          <Route
            exact
            path="/sample"
            key="/sample"
            render={() => {
              return <Redirect to="/sample/redirection/path" />
            }}
          />

          {/* Error */}
          <Route key="/404" component={Error404} />
        </Switch>
      )
    }),
  ),
)

export default RootRouter
