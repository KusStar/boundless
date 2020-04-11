import styled from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '@utils/constants'

const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.2rem;
  font-family: PingFang SC, sans-serif;
  white-space: pre-line;
  letter-spacing: 0;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export default Text
