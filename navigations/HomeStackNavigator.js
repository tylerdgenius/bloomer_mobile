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

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      {/* <Drawer.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} /> */}
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
      {/* <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/9.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      /> */}
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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
