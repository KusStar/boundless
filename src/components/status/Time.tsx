import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/core'
import timeFormatter from '@utils/time-formatter'
import CurrentIcon from './CurrentIcon'

const Wrapper = styled.div`
  height: 32px;
  width: 120px;
  background: #3F4044;
  border-radius: 16px;
  display: flex;
  padding: 0 6px;
  align-items: center;
  justify-content: space-around;
`

interface Props {
  time: number
}

const Time: React.FC<Props> = ({
  time
}) => (
  <Wrapper>
    <CurrentIcon 
      time={time}
    />
    <Text style={{ 
        fontSize: 14, 
        transition: 'all 0.3s', 
      }}
    >
      {timeFormatter.readable(time) }
    </Text>
  </Wrapper>
)

export default Time
