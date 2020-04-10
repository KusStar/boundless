import React, { useEffect } from 'react'
import { connect } from 'unistore/react'
import assets from '@utils/assets'
import { Container, Content } from '@components/core'
import Background from '@components/Background'
import Box from '@components/Box'
import Status from '@components/status'
import BottomBar from '@components/bottom'
import Modals from '@components/modals'
import { InjectedPlayerProps, actions as playerActions } from '@utils/store/player'
import { InjectedSystemProps, actions as systemActions } from '@utils/store/system'
import { compose, isGameOver } from '@utils/helpers'

type Props = InjectedPlayerProps & InjectedSystemProps

const Home = (props: Props) => {
  const { onScene, system, updateTime, player } = props;

  useEffect(() => {
    timeCounter()
  }, [])

  const timeCounter = () => {
    const { isOver, type } = isGameOver(player);
    if (!isOver) {
      setTimeout(() => {
        updateTime()
        timeCounter()
      }, 1000)
    } else {
      console.log(type)
    }
  }

  const handleOnScene = (id: number) => {
    const { scene } = system;
    if (id === scene.id) id = -1;
    onScene(id)
  }

  return (
    <Container fullscreen>
      <Box>
        <Background src={assets.home} />
        <Status 
          system={system}
          player={player}
        />
        <Content>
          <Modals system={system} />
        </Content>
        <BottomBar onScene={handleOnScene} />
      </Box>
    </Container>
  )
}

export default connect<{}, {}, {}, Props>(
  ['player', 'system'], 
  compose(playerActions, systemActions)
)(Home)
