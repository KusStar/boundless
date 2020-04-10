import React from 'react'
import Package from './Package'
import Story from './Story'
import Switcher from './Switcher'
import Event from './Event'

interface Props {
  currentModal: Modal
}

const Modals = ({ currentModal }: Props) => {

  const renderModal = () => {
    switch (currentModal) {
      case 'Package':
        return <Package />
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
