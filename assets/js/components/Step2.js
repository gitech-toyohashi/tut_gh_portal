import React from 'react';
import styled from 'styled-components';
import { StInput, StInputWrapper, StLabel } from '../shareComponents';

function Step2() {
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
          Date
        </StLabel>
        <StInput />
      </StInputWrapper>
      <StInputWrapper
        style={{ marginBottom: '20px', maxWidth: '450px', width: '100%' }}
      >
        <StLabel style={{ fontSize: '18px', marginBottom: '16px' }}>
          Time
        </StLabel>
        <StInput />
      </StInputWrapper>
    </div>
  );
}

export default Step2;
