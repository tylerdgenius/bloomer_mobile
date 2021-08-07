//Importing Necessary React Components
import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
//Importing Bottom Tab Navigators
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Importing All Necessary Screens
// import Login from "../screens/Login";
// import Flat from "../components/Flat";
// import Register from "../screens/Register";
// import Wallet from "../screens/Wallet";
// import Setting from "../screens/Settings";
// import AddChild from "../components/Child/AddChild";
// import ViewAllChildren from "../components/Child/ViewAllChildren";


//Create a Bottom Tab Navigator Controller
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