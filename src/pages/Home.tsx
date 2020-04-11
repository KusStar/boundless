import React, { useEffect, useLayoutEffect, memo, useRef } from 'react'
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
import store from '@utils/store'
import { Modal, Sound, EndType } from '@utils/enums'


interface HomeProps {
  onEnd: (type: EndType) => void
}

type Props = HomeProps & InjectedPlayerProps & InjectedSystemProps

const Home = memo((props: Props) => {
  const { system, updateTime,
    player, changeModal, onEnd, effectPlayer } = props;
  
  const unsubscribe =  useRef<any>(null)
  const timer = useRef<any>(null)

  useEffect(() => {
    timeCounter()
    unsubscribe.current = store.subscribe( state => checkOver(state.player) );
  }, [])

  useLayoutEffect(() => {
    launchpad.bgmStart()
  }, [])

  const checkOver = (player: Player) => {
    const { isOver, type } = isGameOver(player);
    if (isOver) {
      timer.current && clearInterval(timer.current)
      if (unsubscribe.current) {
        unsubscribe.current()
        unsubscribe.current = null
      }
      onEnd(type)
      launchpad.fire(Sound.End)
    }
  }

  const timeCounter = () => {
    timer.current = setInterval(() => {
      updateTime()
    }, 1000)
  }

  const handleOnModal = (target: Modal) => {
    let soundName = Sound.DoorOpen
    if (target === system.currentModal) { 
      target = Modal.Unknown
      soundName = Sound.DoorClose
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
})

export default connect<HomeProps, {}, {}, Props>(
  ['player', 'system'], 
  compose(playerActions, systemActions)
)(Home)
