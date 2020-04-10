import React, { useEffect, useState } from 'react'
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
  const { system, updateTime, player, changeModal } = props;

  useEffect(() => {
    timeCounter()
  }, [])

  const timeCounter = () => {
    const { isOver, type } = isGameOver(player);
    if (!isOver) {
      setTimeout(() => {
        updateTime()
        timeCounter()
      }, 500)
    } else {
      console.log(type)
    }
  }

  const handleOnModal = (target: Modal) => {
    if (target === system.currentModal) target = ''
    changeModal(target)
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
          <Modals currentModal={system.currentModal}/>
        </Content>
        <BottomBar onModal={handleOnModal} />
      </Box>
    </Container>
  )
}

export default connect<{}, {}, {}, Props>(
  ['player', 'system'], 
  compose(playerActions, systemActions)
)(Home)
