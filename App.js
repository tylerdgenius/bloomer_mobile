import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigations/Navigator"

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;
