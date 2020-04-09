import React from 'react';
import styled from 'styled-components';
import { Image } from '@components/core'
import assets from '@utils/assets'

const Wrapper = styled.div`
  height: 60px;
  width: 60px;
  background: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Icon = styled(Image)`
  height: 57px;
  width: 49.23px;
`

const Time = () => (
  <Wrapper>
    <Icon 
      src={assets.property}
    />
  </Wrapper>
)

export default Time
