import React from 'react'
import { connect } from 'unistore/react'
import { Container, Fade, Input, Text } from '@components/core'
import Card from '@components/Card'
import Box from '@components/Box'
import { InjectedPlayerProps, actions } from '@utils/store/player'

type Props = InjectedPlayerProps

const Home = (props: Props) => {
  const { player, changeName } = props;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = String(event.target.value)
    changeName(name)
  }

  return (
    <Container fullscreen>
      <Box background="#eee">
        <Fade>
          <Card>
            <Input 
              placeholder="NMSL" 
              onChange={onInputChange}
            />
            <Text>
              {player.name}
            </Text>
          </Card>
        </Fade>
      </Box>
    </Container>
  )
}

export default connect<{}, {}, {}, InjectedPlayerProps>('player', actions)(Home)
