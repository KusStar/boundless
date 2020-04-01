import styled from 'styled-components';

const Text = styled.p`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: 'Noto Serif TC', serif;
  white-space: pre-line;
  letter-spacing: 0;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export default Text
