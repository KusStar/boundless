import styled from 'styled-components'
import { Container } from '@components/core'
import timeFormatter from '@utils/time-formatter'

interface Props {
  time: number
}

const overlayOpacity = (time: number) => {
  const period = timeFormatter.period(time)
  switch (period) {
    case 'morning': 
      return 0.3
    case 'noon':
      return 0
    case 'night':
      return 0.7
  }
}

const Overlay = styled(Container)<Props>`
  transition: all 1s;
  background: rgba(0, 0, 0, ${props => overlayOpacity(props.time)});
  z-index: 5;
`

export default Overlay
