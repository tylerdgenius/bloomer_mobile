import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

const CustomMenuBar = (props) => {
  let newColor = props.color
  let navigation = props.navigation

  const walletBar = require("../../assets/bag.png");
  const menuBar = require("../../assets/menu.png")
  return (
    <View style={{...styles.mainContainer, backgroundColor: newColor }}>
      {/* Wallet Bag and Text */}
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <TouchableOpacity
          onPress={() => {
            console.log("Button Clicked")
            navigation.toggleDrawer();
          }}
        >
          <Image
            source={require("../../assets/menu.png")}
            style={{
              height: 10,
              width: 20,
            }}
          />
        </TouchableOpacity> */}
            <Image
              source={walletBar}
              style={{ height: 20, width: "20%" }}
              resizeMode="contain"
            />
          
          <Text style={styles.firstSectionText}>N0.00</Text>
        </View>
      </View>
      {/* Name and Avatar */}
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.firstSectionText}>Hi, Goodness</Text>
          <TouchableOpacity style={{ elevation: 30 }}>
            <Image
              source={require("../../images/g.png")}
              style={{ height: 60, width: 60 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 20
  },

  firstSectionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default CustomMenuBar;
