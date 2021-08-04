import React, { useState } from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/HomeStackNavigator";
import DrawerNavigator from "./navigations/Navigator";
import StackNav from "./navigations/StackNav";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainLoading from './components/Loading/MainLoading'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#8ac546",
    accent: "#e90388", 
  },
};


const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const setLoadingState = (value) => {
    setIsLoading(value)
  }
  


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {isLoading ? <MainLoading /> : <HomeStackNavigator setLoadingState={setLoadingState} />}
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
