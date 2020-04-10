import React from 'react';
import { Container } from '@components/core'
import Box from '@components/Box'

interface Props {
  navigate: (route: string) => void
}

const Splash: React.FC<Props>= ({
  navigate
}) => {
  return (
    <Container fullscreen>
      <Box>
        <button
          onClick={() => navigate('Home')}
        >
          开始
        </button>
      </Box>
    </Container>
  )
}

export default Splash
