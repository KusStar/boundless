import styled from 'styled-components'
import { Container } from '@components/core'
import { mobileWidthPixels } from '@utils/threshold'

const Box = styled(Container)`
  width: 400px;
  background: #fff;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${mobileWidthPixels}) {
    width: 100%;
  }
`

export default Box
