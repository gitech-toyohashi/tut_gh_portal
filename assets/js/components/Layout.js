import React from 'react';
import styled from 'styled-components';

const StLayout = styled.div`
  height: 100%;
  max-width: 834px;
  margin: 0 auto;
  padding: 0 20px;
`;

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;
