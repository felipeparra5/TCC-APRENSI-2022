import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Home,
  SplashScreen,
  Detail,
  SearchScreen,
  FavoritesScreen,
  WatchScreen,
} from '../screens'
import ProfileScreen from '~/screens/Profile'
import Login from '~/screens/Login'
import Cadastro from '~/screens/Cadastro'
import { BottomBar } from '~/components'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Perfil' }}
        name="User"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Watch" component={WatchScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
