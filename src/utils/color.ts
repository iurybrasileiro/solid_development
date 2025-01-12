import { type ContentTheme } from 'src/types/content'

import { getRandomNumberInRange } from './common'

export const getContentColorBasedOnBackground = (
  backgroundColor: string,
): ContentTheme => {
  backgroundColor = backgroundColor.substring(1)
  const r = parseInt(backgroundColor.substring(0, 2), 16)
  const g = parseInt(backgroundColor.substring(2, 4), 16)
  const b = parseInt(backgroundColor.substring(4, 6), 16)

  const srgb = [r / 255, g / 255, b / 255]
  const x = srgb.map(i => {
    if (i <= 0.04045) {
      return i / 12.92
    }

    return Math.pow((i + 0.055) / 1.055, 2.4)
  })

  const L = 0.2126 * x[0] + 0.7152 * x[1] + 0.0722 * x[2]
  return L > 0.179 ? 'dark' : 'light'
}

export const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[getRandomNumberInRange(0, 16)]
  }

  return color
}
