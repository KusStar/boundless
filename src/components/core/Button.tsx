import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import OriginalTouchable from './Touchable'

interface TouchableProps {
  background?: string
}

const Touchable = styled(OriginalTouchable)<TouchableProps>`
  background: ${props => props.background  || '#F3DE99'};
  padding: 10px;
  border-radius: 100px;
  &:hover {
    transform: scale(1.05)
  }
`

interface Props {
  onClick: () => void
  children:  React.ReactNode
  color?: string
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  color
}) => {
  return (
    <Touchable
      onClick={onClick}
    >
      <Text style={{color}}>
        {children}
      </Text>
    </Touchable>
  )
}

export default Button
