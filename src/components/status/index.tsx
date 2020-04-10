import React from 'react';
import { connect } from 'unistore/react'
import styled from 'styled-components';
import { Container } from '@components/core'
import { InjectedSystemProps, actions } from '@utils/store/system'
import Time from './Time'
import Property from './Property'

const Wrapper = styled(Container)`
  height: 80px;
  width: 100%;
  background: 0;
  position: absolute;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  z-index: 2;
`

const Status = (props: InjectedSystemProps) => (
  <Wrapper>
    <Time time={props.system.time}/>
    <Property />
  </Wrapper>
)

export default connect<{}, {}, {}, InjectedSystemProps>
('system', actions)
(Status)
