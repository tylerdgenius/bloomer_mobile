import React from 'react'
import {Text, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsHomePage from '../SettingsViews/Settings'

const Stack = createNativeStackNavigator()

const SettingsStackNav = props => {
    return(
       <Stack.Navigator>
           <Stack.Screen name="SettingsHome" component={SettingsHomePage} />
       </Stack.Navigator>
    )
}

export SettingsStackNav