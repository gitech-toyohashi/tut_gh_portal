import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './Header';

const StSignUp = styled.div`
  max-width: 315px;
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #f8f7ef;
  border-radius: 10px;
  padding: 5px 25px;
`;
const StTitle = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding-top: 10px;
  color: #3e3e47;
  text-align: center;
`;
const StWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StInput = styled.input``;
class SignUp extends React.Component {
  render() {
    return (
      <StSignUp>
        <StTitle>Global House’s Assembly Room Reservation</StTitle>
        <StWrapper>
          <StInput />
          <StInput />
        </StWrapper>
        <ActionButton style={{ padding: '5px 0px', marginBottom: '20px' }}>
          Sign in
        </ActionButton>
      </StSignUp>
    );
  }
}

export default SignUp;
