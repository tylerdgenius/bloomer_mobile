//Importing Necessary React Components
import React from 'react';
//Importing All Necessary Navigators
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../../Components/DashboardStack/DashboardViews/Dashboard';



const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function HomeStackNavigator(props) {
  //Get loadingState props from the parent component and send it down to grandchildren/stacks
  const setLoadingState = props.setLoadingState;

  return (
    //Create a Stack Navigator Controller
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen name="Main">
        {props => {
          return <Dashboard setLoadingState={setLoadingState} {...props} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
