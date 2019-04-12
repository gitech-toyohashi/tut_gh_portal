import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  ...state.routeReducer
})

class Home extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)