import React from 'react'
import styled from 'styled-components'
import { Image, Text } from '@components/core'
import Wrapper from './Wrapper'
import assets from '@utils/assets'

const Col = styled(Wrapper)`
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled(Image)`
  height:60px;
  width: 60px;
  transition: all 0.3s;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`

const Story = () => {
  return (
    <Col>
      <Image 
        style={{
          height: '60%'
        }}
        src={assets.inbox}
      />
    </Col>
  )
}

export default Story;
