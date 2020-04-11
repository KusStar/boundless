import React from 'react'
import styled from 'styled-components'

const LineWrapper = styled.div`
  width: 100px;
  height: 12px;
  border-radius: 8px;
  position: relative;
`

interface LineProps {
  value: number
  opacity?: number
  color?: string
}

const Line = styled.div<LineProps>`
  height: 100%;
  width: ${props => (props.value > 0 ? props.value : 0)+ '%'};
  border-radius: 8px;
  position: absolute;
  background: ${props => props.color || '#000'};
  opacity: ${props => props.opacity || 1};
  transition: all 0.3s;
`

interface Props  {
  color: string
  value: number
}

const Bar: React.FC<Props> = ({
  color,
  value
}) => (
  <LineWrapper>
    <Line opacity={0.5} color={color} value={100} />
    <Line color={color} value={value} />
  </LineWrapper>
)

export default Bar
