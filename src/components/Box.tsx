import styled from 'styled-components'
import { Container } from '@components/core'
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@utils/constants'

const Box = styled(Container)`
  width: 400px;
  position: relative;
  background: #111;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }

  @media ${TABLET_MEDIA_QUERY} {
    width: 75%;
  }
`

export default Box
