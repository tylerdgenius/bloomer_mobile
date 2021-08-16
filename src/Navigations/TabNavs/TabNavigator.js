import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../../Components/DashboardStack/DashboardParentStackNavs/DashboardStackNav';
import WalletParentStackNav from '../../Components/WalletStack/WalletParentStackNav/WalletParentStackNav'
import NotificationsStackNav from '../../Components/NotificationsStack/NotificationStackNav/NotificationStackNav';
// import Settings from '../components/Screens/Settings'
// import Notifications from '../components/Screens/Notifications';
// import BookAppointment from '../components/Screens/BookAppointment'
import SettingsStackNav from '../../Components/SettingStack/SettingsViews/Settings'
import AppointmentParentStackNav from '../../Components/AppointmentStack/AppointmentParentStackNav/AppointmentStackNav';

const Tab = createBottomTabNavigator();

const TabNav = props => {
  return (
    <Tab.Navigator initialRouteName="Wallet" screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Wallet" component={WalletParentStackNav} />
      <Tab.Screen name="Appointments" component={AppointmentParentStackNav} />
      <Tab.Screen name="Notifications" component={NotificationsStackNav} />
      <Tab.Screen name="Settings" component={SettingsStackNav} />
    </Tab.Navigator>
  );
};


export default TabNav