import React from 'react'
import { Provider } from 'unistore/react'
import { Reset } from 'styled-reset'
import { DefaultStyles } from '@utils/default-styles'
import Router from '@pages/Router'
import store from '@utils/store'

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <DefaultStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
