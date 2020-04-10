import React from 'react'
import styled from 'styled-components'
import { Text, Image } from '@components/core'
import assets from '@utils/assets'

const Wrapper = styled.div`
  width: 100px;
  height: 12px;
  border-radius: 8px;
  position: relative;
`

interface LineProps {
  value?: number
  opacity?: number
  color?: string
}

const Line = styled.div<LineProps>`
  height: 100%;
  width: ${props => (props.value || 100)+ '%'};
  border-radius: 8px;
  position: absolute;
  background: ${props => props.color || '#000'};
  opacity: ${props => props.opacity || 1}
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
    style: {},
  },
  energy: {
    src: assets.energy,
    color: '#F1CB50',
    style: {},
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <IconContainer>
        <Icon src={target.src} style={target.style} />
      </IconContainer>
      <Wrapper>
        <Line opacity={0.5} color={color} />
        <Line color={color} value={value} />
      </Wrapper>
    </div>
  )
}

export default Progress
