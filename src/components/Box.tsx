import styled from 'styled-components'
import { Container } from '@components/core'
import { mobileMediaQuery } from '@utils/threshold'

const Box = styled(Container)`
  width: 400px;

  @media ${mobileMediaQuery} {
    width: 100%;
  }
`

export default Box
