import "regenerator-runtime/runtime"
import "../css/app.css"
import "phoenix_html"
import React from "react"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import Home from './components/Home'

const store = configureStore()

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)