import { useState } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { type StatusBarStyle } from 'expo-status-bar'

import { theme } from 'src/consts/theme'
import {
  getRandomColor,
  getContentColorBasedOnBackground,
} from 'src/utils/color'

const useLogic = () => {
  const [statusBarColor, setStatusBarColor] = useState<StatusBarStyle>('dark')

  const animatedTextColor = useSharedValue<string>(theme.dark)
  const animatedBackgroundColor = useSharedValue<string>(theme.light)

  const animateBackgroundHandler = (): void => {
    const nextBackgroundColor = getRandomColor()
    const themeName = getContentColorBasedOnBackground(nextBackgroundColor)
    const textColor = theme[themeName]

    setStatusBarColor(themeName)

    animatedBackgroundColor.value = withTiming(nextBackgroundColor, {
      duration: 500,
    })
    animatedTextColor.value = withTiming(textColor, { duration: 500 })
  }

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: animatedBackgroundColor.value,
  }))

  const textAnimatedStyle = useAnimatedStyle(() => ({
    color: animatedTextColor.value,
  }))

  return {
    statusBarColor,
    textAnimatedStyle,
    backgroundAnimatedStyle,
    animateBackgroundHandler,
  }
}

export default useLogic
