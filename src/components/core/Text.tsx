import styled from 'styled-components';
import { mobileMediaQuery } from '@utils/threshold'

const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.2rem;
  font-family: PingFang SC, sans-serif;
  white-space: pre-line;
  letter-spacing: 0;

  @media ${mobileMediaQuery} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export default Text
