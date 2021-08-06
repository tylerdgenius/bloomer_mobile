import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Flat from "../components/Flat";
import Register from "../screens/Register";
import { Image } from "react-native";
import Login from "../screens/Login";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard";
import Wallet from "../screens/Wallet";
import Setting from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddChild from '../components/Child/AddChild'
import ViewAllChildren from '../components/Child/ViewAllChildren'
import { View, StyleSheet } from "react-native";


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Flat} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Settings" component={Setting} />
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#eff4f0",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Flat}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/9.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/9.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/9.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};



const HomeStackNavigator = ({setLoadingState}) => {
  
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home">{props => {return(
        <Login props={props} LoadingState={setLoadingState} navigation={props.navigation}/>
      )}}</Stack.Screen>
      <Stack.Screen name="Register">{props => {return(
        <Register props={props} LoadingState={setLoadingState} navigation={props.navigation}/>
      )}}</Stack.Screen>
      <Stack.Screen name="Dashboard" component={Flat} />
      {/* <Stack.Screen name="AddChild" component={AddChild} />
      <Stack.Screen name="ViewAllChildren" component={ViewAllChildren} /> */}
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#8ac546",

  }
})

export default HomeStackNavigator;
