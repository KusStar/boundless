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

interface Props {
  onScene: (id: number) => void
}

const buttons = [
  { 
    src: assets.box, 
    id: 0 
  }, 
  { 
    src: assets.story, 
    id: 1 
  }, 
  { 
    src: assets.event, 
    id: 2,
    style: {
      height: 45,
      width: 45,
      bottom: 5
    }
  }, 
  { 
    src: assets.switcher, 
    id: 3, 
    style: {
      height: 40,
      width: 40,
      bottom: 5,
    } 
  }, 
]

const Buttons: React.FC<Props>= ({
  onScene
}) => (
  <Wrapper>
    {buttons.map((button) => (
      <Button 
        src={button.src}
        key={button.id}
        style={button.style}
        onClick={() => onScene(button.id)}
      />
    ))}
    <Circle />
  </Wrapper>
)

export default Buttons 
