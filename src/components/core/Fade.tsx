import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

interface Props {
  duration?: number
}

const Fade = styled.div<Props>`
  animation: ${fadeIn} ${props => (props.duration || 500) / 1000}s ease-in;
`

export default Fade
