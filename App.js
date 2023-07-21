import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { proxy, useSnapshot } from 'valtio'

const store = proxy({
  foo: {},
})

function DetailsScreen() {
  const { foo } = useSnapshot(store)
  React.useEffect(() => {
    store.foo = { 1: { a: 1 } }
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <Text>details page{JSON.stringify(foo, null, 2)}</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Text>Click detail button, error occurs</Text>
      <Button
        title="detail page"
        onPress={() => {
          navigation.navigate('Details')
        }}
      ></Button>
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
