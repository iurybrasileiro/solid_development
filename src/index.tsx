import React from 'react'

import useLoadFonts from './hooks/useLoadFonts'
import Home from './pages/home'

function Main() {
  const { fontsLoaded } = useLoadFonts()

  if (!fontsLoaded) {
    return null
  }

  return <Home />
}

export default Main
