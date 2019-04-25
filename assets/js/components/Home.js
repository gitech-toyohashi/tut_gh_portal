import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import Header from './Header';
import SignUp from './SignUp';

const mapStateToProps = state => ({
  ...state.routeReducer
});

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <SignUp />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(Home);
