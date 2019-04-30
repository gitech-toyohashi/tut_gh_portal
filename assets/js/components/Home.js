import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Layout from './Layout';
import Header from './Header';
import SignUp from './SignUp';
import StepForm from './StepForm';

const mapStateToProps = state => ({
  ...state.routeReducer
});

const StMainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
class Home extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <StMainSection>
          {/* <SignUp style={{ marginTop: '100px' }} /> */}
          <StepForm />
        </StMainSection>
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(Home);
