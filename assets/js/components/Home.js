import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import Header from './Header';

const mapStateToProps = state => ({
  ...state.routeReducer
});

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(Home);
