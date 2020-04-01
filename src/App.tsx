import React from 'react'
import { Reset } from 'styled-reset'
import { DefaultStyles } from '@utils/default-styles'
import Home from '@pages/Home'

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <DefaultStyles />
      <Home />
    </>
  )
}
export default App
