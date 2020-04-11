import React from 'react'
import styled from 'styled-components'
import { Image } from '@components/core'
import assets from '@utils/assets'
import { EMPTY_OBJECT } from '@utils/constants'
import Bar from '@components/Bar'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Icon = styled(Image)`
  height: 20px;
  width: 20px;
`

const IconContainer = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  border-radius: 13px;
  background: #C4C4C4;
`

interface Props {
  type: 'health' | 'energy' | 'mood'
  value: number
}

const progressMap = {
  health: {
    src: assets.heart,
    color: '#69E166',
    style: {
      height: 24,
      width: 24
    } as React.CSSProperties,
  },
  energy: {
    src: assets.energy,
    color: '#F1CB50',
    style: EMPTY_OBJECT
  },
  mood:{
    src: assets.mood,
    color: '#F4980C',
    style: {
      height: 16,
      width: 16
    } as React.CSSProperties
  }
}

const Progress: React.FC<Props> = ({
  type,
  value
}) => {
  const target = progressMap[type]
  const color = target.color
  return (
    <Wrapper>
      <IconContainer>
        <Icon src={target.src} style={target.style} />
      </IconContainer>
      <Bar color={color} value={value}/>
    </Wrapper>
  )
}

export default Progress
