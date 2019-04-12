import React, { Component } from 'react'
import { connect } from 'react-redux'

import sampleAction from '../actions/sample_action'

const mapStateToProps = (state) => ({
  ...state.routeReducer,
  ...state.sampleReducer
})

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.props.dispatch(sampleAction.test("This is payload"))
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)