import React from 'react';
import styled from 'styled-components';
import { CheckSvg, LineSvg, ActionButton } from '../shareComponents';
import Step1 from './Step1';

const StepIntro = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: start;
  color: #3e3e47;
  margin-top: ${props => (props.top ? props.top : '0px')};
`;
const StCheckStepWrapper = styled.div`
  display: flex;
  max-width: 450px;
  justify-content: space-evenly;
  align-items: center;
  margin: 40px auto;
`;
const StepWrapper = styled.div`
  padding: 0 20px;
`;
function StepForm() {
  return (
    <StepWrapper>
      <StepIntro top="40px">Welcome to TuT Global House</StepIntro>
      <StepIntro>
        Please fill in the form to reserve the assembly room.
      </StepIntro>
      <StCheckStepWrapper>
        <CheckSvg isCheck={true} color="#ff5394" />
        <LineSvg isCheck={false} color="#ff5394" />
        <CheckSvg isCheck={true} color="#ff5394" />
        <LineSvg isCheck={true} color="#ff5394" />
        <CheckSvg isCheck={true} color="#ff5394" />
        <LineSvg isCheck={true} color="#ff5394" />
        <CheckSvg isCheck={true} color="#ff5394" />
      </StCheckStepWrapper>
      <div>
        <Step1 />
        <div style={{ textAlign: 'right', marginTop: '50px' }}>
          <ActionButton>Next</ActionButton>
        </div>
      </div>
    </StepWrapper>
  );
}

export default StepForm;
