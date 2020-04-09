import React from 'react'
import { connect } from 'unistore/react'
import assets from '@utils/assets'
import { Container, Content, Text } from '@components/core'
import Background from '@components/Background'
import Box from '@components/Box'
import Status from '@components/status'
import BottomBar from '@components/bottom'
import { InjectedPlayerProps, actions as playerActions } from '@utils/store/player'
import { InjectedSystemProps, actions as systemActions } from '@utils/store/system'
import { compose } from '@utils/helpers'

type Props = InjectedPlayerProps & InjectedSystemProps

const Home = (props: Props) => {
  const { player, changeName, } = props;

  return (
    <Container fullscreen>
      <Box>
        <Background src={assets.home}/>
        <Status />
        <Content>
          <Text>
            {player.name}
          </Text>
        </Content>
        <BottomBar />
      </Box>
    </Container>
  )
}

export default connect<{}, {}, {}, Props>(
  ['player', 'system'], 
  compose(playerActions, systemActions)
)(Home)
