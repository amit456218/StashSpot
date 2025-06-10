import type React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import HomeScreen from "./screens/HomeScreen"
import WhyWeExistScreen from "./screens/WhyWeExistScreen"
import SearchScreen from "./screens/SearchScreen"

export type RootStackParamList = {
  Home: undefined
  WhyWeExist: undefined
  Search: { location: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#f8fafc" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WhyWeExist" component={WhyWeExistScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
