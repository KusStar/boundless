
import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/core'

const Outside = styled(Container)`
  height: 200px;
  width: 100%;
  background: linear-gradient(
    -3deg, 
    #F1CB50 50%, 
    transparent 0%
  );
  position: absolute;
  bottom: 0;
  z-index: 2;
`

const Inside = styled(Container)`
  height: 170px;
  width: 100%;
  background: linear-gradient(
    -4deg,
    #3F4044 54%, 
    transparent 0%
  );
  position: absolute;
  bottom: 0;
`

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({
  children
}) => (
  <Outside>
    <Inside />
    {children}
  </Outside>
)

export default Wrapper
