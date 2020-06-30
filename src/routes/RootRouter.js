import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { history } from '../utils/history'
import { routes } from '../data/routes'

import Main from '../pages/Main'
import VideoDetail from '../pages/Detail/VideoDetail'
import Policy from '../pages/Footer/Policy'
import Privacy from '../pages/Footer/Privacy'
import Copyright from '../pages/Footer/Copyright'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'

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

      const gnbRouters = routes.map((item) => {
        return (
          <Route
            key={item.url}
            exact
            path={`${item.url}`}
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
          {gnbRouters}

          {/* 상세페이지 */}
          <Route exact path="/videos/:id" component={VideoDetail} />

          {/* Footer */}
          <Route
            key="/policy"
            exact
            path="/policy"
            render={() => {
              return <Policy />
            }}
          />
          <Route
            key="/privacy"
            exact
            path="/privacy"
            render={() => {
              return <Privacy />
            }}
          />
          <Route
            key="/copyright"
            exact
            path="/copyright"
            render={() => {
              return <Copyright />
            }}
          />
          <Route
            key="/login"
            exact
            path="/login"
            render={() => {
              return <Login />
            }}
          />
          <Route
            key="/signup"
            exact
            path="/signup"
            render={() => {
              return <Signup />
            }}
          />
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
