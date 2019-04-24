import React from 'react';
import styled from 'styled-components';

const StLayout = styled.div`
  height: 100%;
  max-width: 834px;
`;

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;
