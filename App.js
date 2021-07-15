import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import SlideList from "./components/slidelist";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/user/login";
import Register from "./components/user/register";

const App = () => {
  const logo = require("./assets/img/logo/bloomer.png");
  const userPlaceholder = "e.g John Doe";
  const loginBg = require("./assets/img/bg/fingerprint.png");
  const regBg = require("./assets/img/bg/bloom03.png");
  const googleIcon = require("./assets/img/social/search.png");
  const fbIcon = require("./assets/img/social/facebook.png");
  const twitterIcon = require("./assets/img/social/twitter.png");

  const SlidePage = ({ navigation }) => {
    return <SlideList navigation={navigation} />;
  };

  const RegisterPage = ({ navigation }) => {
    return (
      <Register
        navigation={navigation}
        logo={logo}
        userPlaceholder={userPlaceholder}
        fingerImage={regBg}
        googleIcon={googleIcon}
        fbIcon={fbIcon}
        twitterIcon={twitterIcon}
      />
    );
  };

  const LoginPage = ({ navigation }) => {
    return (
      <Login
        navigation={navigation}
        logo={logo}
        userPlaceholder={userPlaceholder}
        fingerImage={loginBg}
        googleIcon={googleIcon}
        fbIcon={fbIcon}
        twitterIcon={twitterIcon}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      height: useWindowDimensions().height,
      width: useWindowDimensions().width,
    },
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Slider"
          component={SlidePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
