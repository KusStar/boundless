
import React from 'react';
import styled from 'styled-components';
import { Container, Text } from '@components/core'

const Wrapper = styled(Container)`
  height: 25%;
  width: 100%;
  background: linear-gradient(
    -3deg, 
    #F1CB50 50%, 
    transparent 0%
  );
  position: absolute;
  bottom: 0;
`

const Wrapper2 = styled(Container)`
  height: 85%;
  width: 100%;
  background: linear-gradient(
    -4deg,
    #3F4044 54%, 
    transparent 0%
  );
  position: absolute;
  bottom: 0;
`

const Content = styled(Text)`
  position: absolute;
  bottom: 10%;
`

const BottomBar = () => (
  <Wrapper>
    <Wrapper2 />
    <Content>nmsl</Content>
  </Wrapper>
)

export default BottomBar
