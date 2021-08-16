import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeStackNavigator from './src/Navigations/HomeStackNavs/HomeStackNavigator';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8ac546',
    accent: '#e90388',
  },
};

//Don't save this yet
const App = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setLoadingState = value => {
    setIsLoading(value);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeStackNavigator
          setLoadingState={setLoadingState}
          style={{flex: 1}}
        />
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
});

export default App;
