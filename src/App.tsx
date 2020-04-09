import React from 'react'
import { Provider } from 'unistore/react'
import { Reset } from 'styled-reset'
import { DefaultStyles } from '@utils/default-styles'
import Home from '@pages/Home'
import store from '@utils/store'

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <DefaultStyles />
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}

export default App
