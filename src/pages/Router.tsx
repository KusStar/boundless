import React, { useState } from 'react';
import { Fade } from '@components/core'
import Home from './Home'
import Splash from './Splash'
import End from './End';

const Router = () => {
  const [route, setRoute] = useState<Route>('Home')
  const [endType, setEndType] = useState<EndType>('')

  const onEnd = (type: EndType) => {
    setRoute('End')
    setEndType(type)
  }

  const renderRoute = () => {
    switch (route) {
      case 'Home':
        return (
          <Fade duration={800}>
            <Home onEnd={onEnd}/>
          </Fade>
        )
      case 'Splash':
        return (
          <Splash navigate={setRoute} />
        )
      case 'End':
        return (
          <End 
            type={endType}
          />
        )
    }
  }

  return renderRoute()
}

export default Router
