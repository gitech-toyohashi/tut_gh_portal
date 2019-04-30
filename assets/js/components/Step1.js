import React from 'react';
import styled from 'styled-components';
import { StInput, StInputWrapper, StLabel } from '../shareComponents';

function Step1() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <StInputWrapper
        style={{ marginBottom: '20px', maxWidth: '450px', width: '100%' }}
      >
        <StLabel style={{ fontSize: '18px', marginBottom: '16px' }}>
          Representative
        </StLabel>
        <StInput />
      </StInputWrapper>
      <StInputWrapper
        style={{ marginBottom: '20px', maxWidth: '450px', width: '100%' }}
      >
        <StLabel style={{ fontSize: '18px', marginBottom: '16px' }}>
          Number of People
        </StLabel>
        <StInput />
      </StInputWrapper>
    </div>
  );
}

export default Step1;
