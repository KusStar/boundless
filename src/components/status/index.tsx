import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/core'
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
  z-index: 100;
`

interface Props {
  system: System
  player: Player
}

const Status: React.FC<Props> = (props) => {
  const { system, player } = props
  return (
    <Wrapper>
      <Time time={system.time}/>
      <Property player={player} />
    </Wrapper>
  )
}
export default Status
