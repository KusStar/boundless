import React from 'react';
import styled from 'styled-components';
import { Image } from '@components/core'
import assets from '@utils/assets'

const Wrapper = styled.div`
  height: 32px;
  width: 106px;
  background: #3F4044;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Icon = styled(Image)`
  height: ${props => props.height || '26px'};
  width: ${props => props.width || '26px'};
  transition: all 0.3s;
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
`

const Time = () => (
  <Wrapper>
    <Icon 
      src={assets.morning}
    />
    <Icon 
      src={assets.noon}
    />
    <Icon 
      src={assets.night}
      height='18px'
      width='18px'
    />
  </Wrapper>
)

export default Time
