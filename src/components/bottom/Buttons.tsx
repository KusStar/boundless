import React from 'react';
import styled from 'styled-components';
import { Image } from '@components/core'
import assets from '@utils/assets'


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 5%;
`

const Button = styled(Image)`
  height: 50px;
  width: 50px;
  transition: all 0.3s;
  position: relative;
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
`

const Circle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 8px solid #F4CD51;
  background: #5C5C5E;
  transition: all 0.3s;
  position: relative;
  bottom: 10px;
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
`

const Buttons = () => (
  <Wrapper>
    <Button src={assets.box}/>
    <Button src={assets.story}/>
    <Button 
      src={assets.event} 
      style={{
        height: 40,
        width: 40,
        bottom: 5,
      }}
    />
    <Button 
      src={assets.switcher} 
      style={{
        height: 40,
        width: 40,
        bottom: 5,
      }}
    />
    <Circle />
  </Wrapper>
)

export default Buttons 
