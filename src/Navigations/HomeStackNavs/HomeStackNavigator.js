//Importing Necessary React Components
import React from 'react';
//Importing All Necessary Navigators
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Components/User/Login';
import Register from '../../Components/User/Register';
import TabNav from '../TabNavs/TabNavigator';

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function HomeStackNavigator(props) {
  //Get loadingState props from the parent component and send it down to grandchildren/stacks
  const setLoadingState = props.setLoadingState;

  return (
    //Create a Stack Navigator Controller
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login">
        {props => {
          return <Login setLoadingState={setLoadingState} {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {props => {
          return <Register setLoadingState={setLoadingState} {...props} />;
        }}
      </Stack.Screen>

      <Stack.Screen name="Dashboard">
        {props => {
          return <TabNav setLoadingState={setLoadingState} {...props} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
