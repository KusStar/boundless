import styled from 'styled-components'
import { Container } from '@components/core'
import timeFormatter from '@utils/time-formatter'
import { Period } from '@utils/enums'

interface Props {
  time: number
}

const overlayOpacity = (time: number) => {
  const period = timeFormatter.period(time)
  switch (period) {
    case Period.Morning: 
      return 0.3
    case Period.Noon:
      return 0
    case Period.Night:
      return 0.5
  }
}

const Overlay = styled(Container)<Props>`
  transition: all 1s;
  background: rgba(0, 0, 0, ${props => overlayOpacity(props.time)});
  z-index: 5;
`

export default Overlay
