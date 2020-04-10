
import React from 'react';
import Wrapper from './Wrapper'
import Buttons from './Buttons'

interface Props {
  onModal: (target: Modal) => void
}

const BottomBar: React.FC<Props> = ({
  onModal
}) => (
  <Wrapper>
    <Buttons onModal={onModal}/>
  </Wrapper>
)

export default BottomBar
