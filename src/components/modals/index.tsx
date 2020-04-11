import React from 'react'
import Package from './Package'
import Story from './Story'
import Switcher from './Switcher'
import Event from './Event'

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
      case 'Package':
        return (
        <Package 
          effectPlayer={effectPlayer} 
          player={player}
        />
        )
      case 'Story':
        return <Story />
      case 'Switcher':
        return <Switcher />
      case 'Event':
        return <Event />
    }
  }

  return renderModal()
}

export default Modals
