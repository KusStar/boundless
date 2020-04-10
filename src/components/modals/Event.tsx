import React from 'react'
import styled from 'styled-components'
import { Image, Text } from '@components/core'
import Wrapper from './Wrapper'

const Col = styled(Wrapper)`
  flex-direction: column;
`

const Story: React.FC = () => {
  return (
    <Col>
      <Text>
        Merry Chrismas
      </Text>
    </Col>
  )
}

export default Story;
