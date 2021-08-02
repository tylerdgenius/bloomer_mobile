import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const CustomMenuBar = () => {
  const menuBar = require("../../assets/bag.png");
  return (
    <View style={styles.mainContainer}>
      {/* Wallet Bag and Text */}
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={menuBar}
            style={{ height: 50, width: "20%" }}
            resizeMode="contain"
          />
          <Text style={styles.firstSectionText}>N0.00</Text>
        </View>
      </View>
      {/* Name and Avatar */}
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.firstSectionText}>Hi, Goodness</Text>
          <TouchableOpacity style={{elevation: 30}}>
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
    backgroundColor: "white",
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    elevation: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30
  },
  firstSectionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default CustomMenuBar;
