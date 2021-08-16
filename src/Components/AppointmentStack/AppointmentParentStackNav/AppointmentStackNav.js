import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentHomePage from '../AppointmentViews/AppointmentHomePage';

const Stack = createNativeStackNavigator()

const AppointmentParentStackNav = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AppointmentHome" component={AppointmentHomePage} />
        </Stack.Navigator>
    )
}

export default AppointmentParentStackNav;