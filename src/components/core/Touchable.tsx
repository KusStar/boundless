import styled from 'styled-components';
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@utils/constants'

const Touchable = styled.div`
  transition: all 0.5s;
  &:active {
    transform: scale(0.7);
  }
  
  @media ${MOBILE_MEDIA_QUERY}  {
    &:active {
      transform: scale(0.9);
    }
  }

  @media ${TABLET_MEDIA_QUERY} {
    &:active {
      transform: scale(0.9);
    }
  }
`

export default Touchable
