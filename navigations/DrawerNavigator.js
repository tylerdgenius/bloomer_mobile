//Importing Necessary React Components
import React from "react";
//Importing All Necessary Navigators
import { createDrawerNavigator } from "@react-navigation/drawer";
//Importing All Necessary Screens
import Flat from "../components/Flat";
import Wallet from "../screens/Wallet";
import Setting from "../screens/Settings";
import AddChild from "../components/Child/AddChild";
import ViewAllChildren from "../components/Child/ViewAllChildren";
//Importing Drawer Content

//Create a Drawer Navigator Controller
const Drawer = createDrawerNavigator();
const DrawerNavigator = ({LoadingState}) => {
  
  return (
    <Drawer.Navigator initialRouteName="Home" drawerType="back">
      <Drawer.Screen name="Home">
        {(props) => {
          return <Flat {...props} LoadingState={LoadingState}/>
        }}
      </Drawer.Screen>
      <Drawer.Screen name="Wallet">
        {(props) => {
          <Wallet {...props} LoadingState={LoadingState}/>
        }}
      </Drawer.Screen>
      <Drawer.Screen name="Settings">
        {(props) => {
          <Setting {...props} LoadingState={LoadingState}/>
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
