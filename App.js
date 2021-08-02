import React from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/HomeStackNavigator";
import DrawerNavigator from "./navigations/Navigator";
import StackNav from "./navigations/StackNav";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#e90388",
    accent: "#8ac546",
  },
};

const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>

    // <NavigationContainer>
    //   <StackNav />
    // </NavigationContainer>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
