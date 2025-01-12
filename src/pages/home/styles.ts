import { StyleSheet } from 'react-native'

import { fonts } from 'src/consts/fonts'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.extraBold,
  },
})

export default styles
