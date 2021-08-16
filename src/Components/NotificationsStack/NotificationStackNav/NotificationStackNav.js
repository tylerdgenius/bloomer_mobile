import React from 'react'
import {Text, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notifications from '../NotificationViews/NotificationsHomePage'


const Stack = createNativeStackNavigator()

const NotificationsStackNav = props => {
    return(
       <Stack.Navigator inititalRouteName="NotificationHome">
           <Stack.Screen name="NotificationHome" component={Notifications} />
       </Stack.Navigator>
    )
}

export default NotificationsStackNav