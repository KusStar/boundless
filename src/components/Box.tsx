import styled from 'styled-components'
import { Container } from '@components/core'
import { mobileMediaQuery, tabletMeidaQuery } from '@utils/threshold'

const Box = styled(Container)`
  width: 400px;
  position: relative;
  background: #111;

  @media ${mobileMediaQuery} {
    width: 100%;
  }

  @media ${tabletMeidaQuery} {
    width: 75%;
  }
`

export default Box
