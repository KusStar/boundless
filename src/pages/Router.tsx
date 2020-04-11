import React, { useState } from 'react';
import { Fade } from '@components/core'
import Home from './Home'
import Splash from './Splash'
import End from './End';
import { Route, EndType } from '@utils/enums';

const Router = () => {
  const [route, setRoute] = useState<Route>(Route.Home)
  const [endType, setEndType] = useState<EndType>(EndType.Unknown)

  const onEnd = (type: EndType) => {
    setRoute(Route.End)
    setEndType(type)
  }

  const renderRoute = () => {
    switch (route) {
      case Route.Home:
        return (
          <Fade duration={800}>
            <Home onEnd={onEnd}/>
          </Fade>
        )
      case Route.Splash:
        return (
          <Splash navigate={setRoute} />
        )
      case Route.End:
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
