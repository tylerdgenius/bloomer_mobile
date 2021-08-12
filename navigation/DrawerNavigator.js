import React from 'react'
import { View, Text } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../components/Screens/Dashboard'

const Drawer = createDrawerNavigator({
  Home: {
    screen: Dashboard
  }
})

export default function DrawerNav(){
  return(
    <View>
      <Text>Hiii</Text>
    </View>
  )
}