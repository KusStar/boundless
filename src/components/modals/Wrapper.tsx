import styled from 'styled-components'
import { Fade } from '@components/core'

const Wrapper = styled(Fade)`
  position: absolute;
  left:0;
  bottom:0;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Wrapper
