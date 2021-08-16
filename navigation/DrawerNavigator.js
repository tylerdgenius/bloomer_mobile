import React from 'react'
import { View, Text } from 'react-native'
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from '../components/Screens/Dashboard'

// const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default function DrawerNav(props){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Dashboard}/>
    </Drawer.Navigator>
  )
}