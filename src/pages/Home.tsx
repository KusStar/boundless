import React from 'react'
import { Container, Fade } from '@components/core'
import Card from '@components/Card'
import Box from '@components/Box'

const Home: React.FC = () => {
  return (
    <Container fullscreen>
      <Box background="#eee">
        <Fade duration={1000}>
          <Card content={`你只是一个人\n只是不停流逝的瞬间`} />
        </Fade>
      </Box>
    </Container>
  )
}

export default Home
