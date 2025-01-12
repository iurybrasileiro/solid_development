import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import Animated from 'react-native-reanimated'

import { StatusBar } from 'expo-status-bar'

import useLogic from './logic'
import styles from './styles'

function Home() {
  const {
    statusBarColor,
    textAnimatedStyle,
    backgroundAnimatedStyle,
    animateBackgroundHandler,
  } = useLogic()

  return (
    <>
      <StatusBar
        animated
        backgroundColor="transparent"
        style={statusBarColor}
      />

      <TouchableNativeFeedback onPress={animateBackgroundHandler}>
        <Animated.View style={[styles.wrapper, backgroundAnimatedStyle]}>
          <Animated.Text style={[styles.text, textAnimatedStyle]}>
            Hello there!
          </Animated.Text>
        </Animated.View>
      </TouchableNativeFeedback>
    </>
  )
}

export default Home
