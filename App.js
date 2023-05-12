import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as Application from 'expo-application'
import React from 'react'

export default function App() {
  const [updateTime, setUpdateTime] = React.useState('')
  React.useEffect(() => {
    Application.getLastUpdateTimeAsync().then(time => {
      setUpdateTime(time)
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! this is change test github action</Text>
      <Text>this is main branch</Text>
      <Text>
        app id: {Application.applicationName} - {Application.applicationId}
      </Text>
      <Text>update: {updateTime}</Text>
      <Text>app version: {Application.nativeApplicationVersion}</Text>
      <Text>build version: {Application.nativeBuildVersion}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
