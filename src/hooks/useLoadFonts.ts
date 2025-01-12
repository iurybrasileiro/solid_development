import { useEffect } from 'react'

import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

interface UseLoadFontsReturn {
  fontsLoaded: boolean
}

const useLoadFonts = (): UseLoadFontsReturn => {
  const [fontsLoaded] = useFonts({
    Montserrat_ExtraBold: Montserrat_800ExtraBold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return { fontsLoaded }
}

export default useLoadFonts
