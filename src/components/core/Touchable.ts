import styled from 'styled-components';

const Touchable = styled.div`
  transition: all 0.3s;
  &:active {
    transform: scale(0.8);
  }
`

export default Touchable
