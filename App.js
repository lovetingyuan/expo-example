import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, useColorScheme, Button } from 'react-native'
import * as Application from 'expo-application'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Updates from 'expo-updates'
import useColorSchema2 from './useColorSchema2'

function DetailsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>details page</Text>
    </View>
  )
}

import { useAppState } from '@react-native-community/hooks'

function HomeScreen({ navigation }) {
  const [updateTime, setUpdateTime] = React.useState('')
  React.useEffect(() => {
    Application.getLastUpdateTimeAsync().then(time => {
      setUpdateTime(time.toString())
    })
  }, [])
  const color = useColorScheme()
  const color2 = useColorSchema2()
  const currentAppState = useAppState()

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
      <Text>
        color: {color} - {color2}
      </Text>
      <Text>app state: {currentAppState}</Text>
      <Text>timestamp: {Date.now()}</Text>

      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Text>update channel: {Updates.channel}</Text>
      <Text>update created at: {Updates.createdAt.toString()}</Text>
      <Text>update runtimeVersion: {Updates.runtimeVersion}</Text>
      <Text>update Id: {Updates.updateId}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
