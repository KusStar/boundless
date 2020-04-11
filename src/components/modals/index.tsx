import React from 'react'
import Package from './Package'
import Story from './Story'
import Switcher from './Switcher'
import Event from './Event'
import { Modal, EffectType } from '@utils/enums'

interface Props {
  currentModal: Modal
  effectPlayer: (type: EffectType) => void
  player: Player
}

const Modals: React.FC<Props> = ({ 
  currentModal, 
  effectPlayer,
  player
}) => {

  const renderModal = () => {
    switch (currentModal) {
      case Modal.Package:
        return (
        <Package 
          effectPlayer={effectPlayer} 
          player={player}
        />
        )
      case Modal.Story:
        return <Story />
      case Modal.Switcher:
        return <Switcher />
      case Modal.Event:
        return <Event />
    }
  }

  return renderModal()
}

export default Modals
