import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

const Setting = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#8ac546",
          height: "35%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            console.log("Button Clicked");
          }}
        >
          {/* <Image
            source={require("../../images/1.png")}
            style={{
              height: 10,
              width: 20,
              marginTop: 50,
            }} */}
          {/* /> */}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hope you are keeping warm
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            {/* <Image
              source={require("../../../images/g.png")}
              style={{ height: 60, width: 60 }}
            /> */}
          </View>
        </View>
      </View>
      <View>
        <View>
         
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              elevation: 20,
              backgroundColor: "white",
              marginHorizontal: 30,
              borderRadius: 20,
              padding: 25,
              marginTop: 25,
            }}
          >
            {/* <Image /> */}
            <Text style={{ fontSize: 20 }}>Edit Profile</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              elevation: 20,
              backgroundColor: "white",
              marginHorizontal: 30,
              borderRadius: 20,
              padding: 25,
              marginTop: 25,
            }}
          >
            {/* <Image /> */}
            <Text style={{ fontSize: 20 }}>Change Password</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              elevation: 20,
              backgroundColor: "white",
              marginHorizontal: 30,
              borderRadius: 20,
              padding: 25,
              marginTop: 25,
            }}
          >
            {/* <Image /> */}
            <Text style={{ fontSize: 20 }}>Appointments</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              elevation: 20,
              backgroundColor: "white",
              marginHorizontal: 30,
              borderRadius: 20,
              padding: 25,
              marginTop: 25,
            }}
          >
            {/* <Image /> */}
            <Text style={{ fontSize: 20 }}>Wallet</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Setting;
