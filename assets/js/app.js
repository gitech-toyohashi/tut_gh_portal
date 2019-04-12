import "../css/app.css"
import "phoenix_html"
import React from "react"
import { render } from 'react-dom'

import Home from './components/Home'

render(
  <Home />,
  document.getElementById('app')
)