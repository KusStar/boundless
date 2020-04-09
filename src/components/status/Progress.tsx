import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100px;
  height: 10px;
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
  width: ${props => (props.value || 1) * 100 + '%'};
  border-radius: 8px;
  position: absolute;
  background: ${props => props.color || '#000'};
  opacity: ${props => props.opacity || 1}
`

interface Props {
  color: string
  value: number
}

const Progress: React.FC<Props> = ({
  color,
  value
}) => (
  <Wrapper>
    <Line opacity={0.5} color={color} />
    <Line color={color} value={value}/>
  </Wrapper>
)

export default Progress
