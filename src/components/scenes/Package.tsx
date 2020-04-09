import React from 'react'
import styled from 'styled-components'
import { Image } from '@components/core'
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

const Package = () => {
  return (
    <Col>
      <Row>
        <Item src={assets.mask}/>
        <Item src={assets.money} style={{
          margin: 10,
          marginBottom: 30,
        }}/>
        <Item src={assets.food}  style={{
          height: 67,
          width: 67
        }}/>
      </Row>
      <Image 
        src={assets.largeBox}
      />
    </Col>
  )
}

export default Package;
