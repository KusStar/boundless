import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/core'
import { mobileMediaQuery } from '@utils/threshold'

interface Props {
  children?: React.ReactNode
}

const Wrapper = styled(Container)`
  height: 250px;
  width: 250px;
  background: #1E1111;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    transform: translate3d(0px, -2px, 0px);
  }
  padding: 8px;
  
  @media ${mobileMediaQuery} {
    height: 60vw;
    width: 60vw;
  }
`

const Card: React.FC<Props> = ({
  children
}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Card
