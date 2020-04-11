import React from 'react';
import styled from 'styled-components';
import { Image, Touchable } from '@components/core'
import assets from '@utils/assets'
import { Modal } from '@utils/enums'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 5%;
`

const Icon = styled(Image)`
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


const buttons = [
  { 
    src: assets.box, 
    modal: Modal.Package,
  }, 
  { 
    src: assets.story, 
    modal: Modal.Story,
  }, 
  { 
    src: assets.event, 
    modal: Modal.Event,
    style: {
      height: 45,
      width: 45,
      bottom: 2.5
    }
  }, 
  { 
    src: assets.switcher, 
    modal: Modal.Switcher,
    style: {
      height: 40,
      width: 40,
      bottom: 5,
    } 
  }, 
]

interface Props {
  onModal: (target: Modal) => void
}

const Buttons: React.FC<Props>= ({
  onModal
}) => (
  <Wrapper>
    {buttons.map((button) => (
      <Touchable
        onClick={() => onModal(button.modal)}
      >
        <Icon
          src={button.src}
          key={button.modal}
          style={button.style}
        />
      </Touchable>
    ))}
    <Circle />
  </Wrapper>
)

export default Buttons 
