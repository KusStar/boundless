import React, { useState } from 'react';
import { Fade } from '@components/core'
import Home from './Home'
import Splash from './Splash'

const Router = () => {
  const [route, setRoute] = useState<Route>('Home')

  const renderRoute = () => {
    switch (route) {
      case 'Home':
        return (
          <Fade duration={800}>
            <Home />
          </Fade>
        )
      case 'Splash':
        return (
          <Splash navigate={setRoute} />
        )
    }
  }

  return renderRoute()
}

export default Router