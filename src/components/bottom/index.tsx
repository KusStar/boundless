
import React from 'react';
import Wrapper from './Wrapper'
import Buttons from './Buttons'

interface Props {
  onScene: (id: number) => void
}

const BottomBar: React.FC<Props> = ({
  onScene
}) => (
  <Wrapper>
    <Buttons onScene={onScene}/>
  </Wrapper>
)

export default BottomBar
