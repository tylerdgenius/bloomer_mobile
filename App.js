import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/HomeStackNavigator";
import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainLoading from './components/Loading/MainLoading'

//Define Fonts in the project
const fontConfig = {
  web: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  }
};

//Define overall App Theme
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#8ac546",
    accent: "#e90388", 
  },
};


const App = () => {
  //Set Preloader
  const [isLoading, setIsLoading] = useState(false)
  const setLoadingState = (value) => {
    setIsLoading(value)
  }
  

  //Pass preloader stateful function call down the component tree
  return (
    <PaperProvider theme={theme} style={{ flex: 1 }}>
      <NavigationContainer style={{flex: 1}}>
        {/* If Preloader is loading, then render it, if not render the navigator screens */}
        {isLoading ? <MainLoading /> : <HomeStackNavigator setLoadingState={setLoadingState} style={{flex: 1}} />}
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
