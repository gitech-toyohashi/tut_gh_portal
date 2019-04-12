import "regenerator-runtime/runtime"
import "../css/app.css"
import "phoenix_html"
import React from "react"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import Home from './components/Home'

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)