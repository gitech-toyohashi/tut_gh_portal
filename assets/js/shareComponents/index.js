import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StTitle = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding-top: 10px;
  color: #3e3e47;
  text-align: center;
`;
export const StWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StInput = styled.input`
  border: 1px solid #3e3e47;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  padding: 2px 10px;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
`;
export const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
  color: #3e3e47;
`;
export const StSmInfo = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #3e3e47;
`;
export const StTextBtn = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background: transparent;
  color: #ff5394;
  text-decoration: none;
`;

export const ActionButton = styled.button`
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  background: #ff1a70;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 0;
  border: 0;
  color: #fefefe;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  text-transform: none;
  text-align: center;

  :hover,
  :focus {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
    transition: all 0.3s;
    background: #df1a70;
    cursor: pointer;
  }
  :focus {
    /* border: 1px solid teal; */
  }
`;
export function CheckSvg({ isCheck, color, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={isCheck ? color : '#BDBDBD'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-check-square"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

export function LineSvg({ isCheck, color, ...props }) {
  return (
    <svg
      {...props}
      width="100"
      height="1"
      viewBox="0 0 100 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={isCheck ? color : '#BDBDBD'}
    >
      <line x1="1.05938e-05" y1="0.5" x2="100" y2="0.500953" />
    </svg>
  );
}
