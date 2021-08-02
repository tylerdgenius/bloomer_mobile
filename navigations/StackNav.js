import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Flat from "../components/Flat";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const StackNav = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Flat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
