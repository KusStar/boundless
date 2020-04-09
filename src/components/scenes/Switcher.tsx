import React from 'react'
import styled from 'styled-components'
import { Image } from '@components/core'
import assets from '@utils/assets'
import Wrapper from './Wrapper'

const Scene = styled(Image)`
  height: 70%;
  width: 70%;
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  &:hover {
    0 30px 60px rgba(0, 0, 0, 0.12);
    transform: translate3d(0px, -3px, 0px);
  }
`

const Switcher = () => {
  return (
    <Wrapper>
      <Scene src={assets.home} style={{
        position: 'absolute',
        transform: 'translate3d(-40px, 0, 0) scale(0.9)',
        opacity: 0.8
      }}/>
      <Scene src={assets.home} style={{
        position: 'absolute',
        transform: 'translate3d(40px, 0, 0) scale(0.9)',
        opacity: 0.8
      }}/>
      <Scene src={assets.home}/>
    </Wrapper>
  )
}

export default Switcher
