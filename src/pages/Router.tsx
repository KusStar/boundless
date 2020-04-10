import React, { useState } from 'react';
import { Fade } from '@components/core'
import Home from './Home'
import Splash from './Splash'

const Router = () => {
  const [route, setRoute] = useState<string>('Splash')

  const renderRoute = () => {
    switch (route) {
      case 'Home':
        return (
          <Home />
        )
      case 'Splash':
        return (
          <Splash navigate={setRoute} />
        )
    }
  }

  return (
    <Fade>
      {renderRoute()}
    </Fade>
  )
}

export default Router
