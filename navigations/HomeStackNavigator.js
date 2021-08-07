//Importing Necessary React Components
import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
//Importing All Necessary Navigators
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
//Importing All Necessary Screens
import Login from "../screens/Login";
import Register from "../screens/Register";


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

//Create a Stack Navigator Controller
const HomeStackNavigator = ({setLoadingState}) => {
  return (
    //Defining the Navigator component
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Login">
      {/* Defining the Home Screen of the Component */}
      <Stack.Screen name="Login">
        {(props) => {
          return (
            <Login
              LoadingState={setLoadingState}
              navigation={props.navigation}
            />
          );
        }}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {(props) => {
          return (
            <Register
              LoadingState={setLoadingState}
              navigation={props.navigation}
            />
          );
        }}
      </Stack.Screen>
      <Stack.Screen name="Dashboard">
        {(props) => {
          return (
            <DrawerNavigator
              LoadingState={setLoadingState}
              navigation={props.navigation}
              props={props}
            />
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#8ac546",
  },
});

export default HomeStackNavigator;
