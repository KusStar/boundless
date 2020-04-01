import styled from 'styled-components';

interface Props {
  fullscreen?: boolean;
  background?: string;
}

const Container = styled.div<Props>`
  height: ${props => props.fullscreen ? '100vh' : '100%'};
  width: ${props => props.fullscreen ? '100vw' : '100%'};
  background: ${props => props.background || '#000'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Container
