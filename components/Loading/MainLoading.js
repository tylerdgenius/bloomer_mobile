import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";

const MainLoading = () => {
  return (
    <View
      style={{
        backgroundColor: "#e90388",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: "white", marginBottom: 20}}>Loading...</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default MainLoading;
