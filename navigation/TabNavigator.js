import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../components/Screens/Dashboard';
import Wallet from '../components/Screens/Wallet'
import Settings from '../components/Screens/Settings'

const Tab = createBottomTabNavigator();

const TabNav = props => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};


export default TabNav