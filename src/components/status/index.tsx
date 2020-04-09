import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/core'
import Time from './Time'
import Property from './Property'

const Wrapper = styled(Container)`
  height: 10%;
  width: 100%;
  background: 0;
  position: absolute;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
`

const Status = () => (
  <Wrapper>
    <Time />
    <Property />
  </Wrapper>
)

export default Status
