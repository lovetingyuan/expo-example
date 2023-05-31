import { Appearance } from 'react-native'
import { useState, useEffect } from 'react'

export default function useColorSchema2() {
  const color = Appearance.getColorScheme()
  const [colorScheme, setColorScheme] = useState(color)
  useEffect(() => {
    setColorScheme(color)
  }, [color])
  return colorScheme
}
