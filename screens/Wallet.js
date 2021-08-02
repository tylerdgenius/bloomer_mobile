import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const Wallet = ({ navigation }) => {
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
          <Image
            source={require("../images/1.png")}
            style={{
              height: 10,
              width: 20,
              marginTop: 50,
            }}
          />
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
              N0.00
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../images/g.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 50,
              width: "100%",
              marginTop: 20,
              marginHorizontal: 30,
              letterSpacing: 0.01,
            }}
          >
            How would you like to top up?
          </Text>
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
            <Text style={{ fontSize: 20 }}>via USSD</Text>
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
            <Text style={{ fontSize: 20 }}>via Transfer</Text>
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
            <Text style={{ fontSize: 20 }}>via Credit/Debit Card</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
