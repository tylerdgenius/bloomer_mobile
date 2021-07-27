import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { AsyncStorage } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator, DrawerView } from "@react-navigation/drawer";

const CustomNavBar = ({ navigation, previous }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    //App Header
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Bloomer" />
      {/* {!previous ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 2 was pressed");
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      ) : null} */}
    </Appbar.Header>
  );
};

const RegisterPage = ({ navigation }) => {
  return (
    <View>
      <Register navigation={navigation} />
    </View>
  );
};

const LoginPage = ({ navigation }) => {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
};

const Stack = createStackNavigator();


const DashboardPage = ({ navigation }) => {
  return (
    <View>
      <Dashboard navigation={navigation} />
    </View>
  );
};

//Main App Component
export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  // const deleteStorageData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('TOKEN_KEY')
  //   .then((error) => {
  //     console.log('Button clicked')
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  // }
  // const _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("TOKEN_KEY");
  //     if (value){
  //       console.log(value)
  //       return value
  //     } else if (value == Promise){
  //       return null
  //     }

  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };

  // useEffect(() => {
  //   let value = _retrieveData().then((val) => {return val})
  //   console.log(value);
  //   if (value) {
  //     //Navigate to Home Page
  //     setisLoggedIn(true)
  //     console.log(value);
  //   } else if (value === null || value === undefined ) {
  //     setisLoggedIn(false);
  //   }
  // });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              header: (props) => <CustomNavBar {...props} />,
            }}
          >
            {isLoggedIn == true ? (
              <>
                <Stack.Screen
                  name="Dashboard"
                  component={DashboardPage}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};
