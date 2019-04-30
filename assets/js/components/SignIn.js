import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './Header';
import {
  StTitle,
  StWrapper,
  StInput,
  StInputWrapper,
  StLabel,
  StTextBtn,
  StSmInfo
} from '../shareComponents';
function SignUp({ ...props }) {
  return (
    <StSignIn {...props}>
      <StTitle>Global House’s Assembly Room Reservation</StTitle>
      <StWrapper>
        <StInputWrapper>
          <StLabel>Name</StLabel>
          <StInput />
        </StInputWrapper>
        <StInputWrapper>
          <StLabel>TuT Email</StLabel>
          <StInput />
        </StInputWrapper>
      </StWrapper>
      <ActionButton style={{ padding: '8px 0px', marginBottom: '20px' }}>
        Sign in
      </ActionButton>
      <StSmInfo>
        Haven’t registered yet?<StTextBtn>Sign Up</StTextBtn>{' '}
      </StSmInfo>
    </StSignIn>
  );
}
const StSignIn = styled.div`
  max-width: 315px;
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #f8f7ef;
  border-radius: 10px;
  padding: 5px 25px;
  margin: auto;
  @media only screen and (min-width: 600px) {
    max-width: 650px;
  }
`;
export default SignUp;
