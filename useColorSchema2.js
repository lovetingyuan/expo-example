import { useColorScheme, Appearance } from 'react-native'
import { useState, useEffect } from 'react'

export default function useColorSchema2() {
  const [colorScheme, setColorScheme] = useState(useColorScheme())
  // const colorScheme = Appearance.getColorScheme()
  // if (colorScheme === 'dark') {
  //   // Use dark color scheme
  // }
  useEffect(() => {
    const subscription = Appearance.addChangeListener(preferences => {
      setColorScheme(preferences.colorScheme)
    })
    return () => subscription.remove()
  }, [])
  return colorScheme
}
