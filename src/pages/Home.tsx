import React, { useEffect, useLayoutEffect } from 'react'
import { connect } from 'unistore/react'
import assets from '@utils/assets'
import { Container, Content } from '@components/core'
import Background from '@components/Background'
import Box from '@components/Box'
import Status from '@components/status'
import BottomBar from '@components/bottom'
import Modals from '@components/modals'
import Overlay from '@components/Overlay'
import { InjectedPlayerProps, actions as playerActions } from '@utils/store/player'
import { InjectedSystemProps, actions as systemActions } from '@utils/store/system'
import { compose, isGameOver } from '@utils/helpers'
import launchpad from '@utils/launchpad'

interface HomeProps {
  onEnd: (type: EndType) => void
}

type Props = HomeProps & InjectedPlayerProps & InjectedSystemProps

const Home = (props: Props) => {
  const { system, updateTime, player, changeModal, onEnd, effectPlayer } = props;

  useEffect(() => {
    timeCounter()
  }, [])

  useLayoutEffect(() => {
    launchpad.bgmStart()
  }, [])

  const timeCounter = () => {
    const { isOver, type } = isGameOver(player);
    if (!isOver) {
      setTimeout(() => {
        updateTime()
        timeCounter()
      }, 1000)
    } else {
      onEnd(type as EndType)
      launchpad.fire('end')
    }
  }

  const handleOnModal = (target: Modal) => {
    let soundName: Sound = 'doorOpen'
    if (target === system.currentModal) { 
      target = ''
      soundName = 'doorClose'
    }
    changeModal(target)

    launchpad.fire(soundName)
  }

  return (
    <Container fullscreen>
      <Box>
        <Background src={assets.home} />
        <Overlay time={system.time} />
        <Status 
          system={system}
          player={player}
        />
        <Content>
          <Modals
            currentModal={system.currentModal}
            effectPlayer={effectPlayer}
            player={player}
          />
        </Content>
        <BottomBar onModal={handleOnModal} />
      </Box>
    </Container>
  )
}

export default connect<HomeProps, {}, {}, Props>(
  ['player', 'system'], 
  compose(playerActions, systemActions)
)(Home)
