import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
// import CustomMenuBar from "../../Bar/MenuBarVariant";

const Wallet = (props) => {
  let navigation = props.navigation;

  const ussdImg = require('../../../assets/ussd.png');
  const transferImg = require('../../../assets/transfer.png');
  const creditCardImg = require('../../../assets/creditcard.png');
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.view01}>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            {/* <CustomMenuBar color="#8ac546" navigation={navigation} /> */}
          </View>
          <View></View>
        </SafeAreaView>
      </View>
      <View style={styles.view02}>
        <SafeAreaView style={{ flex: 1, flexWrap: "wrap" }}>
          <View style={{ flex: 0.28 }}>
            <Text style={styles.textHead}>How would you like to top up?</Text>
          </View>
          <View style={{ flex: 0.72 }}>
            <TouchableOpacity style={styles.textBoxesContainer}>
              <View style={styles.flexStuff} >
                <Image source={ussdImg} style={{height: 10, width: 30}} />
                <Text style={styles.textBoxes}>via USSD</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBoxesContainer}>
              <View style={styles.flexStuff} >
              <Image source={transferImg} style={{height: 10, width: 30}} />
                <Text style={styles.textBoxes}>via Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBoxesContainer}>
              <View style={styles.flexStuff}>
                <Image source={creditCardImg} style={{height: 20, width: 30}} />
                <Text style={styles.textBoxes}>via Credit/Debit Card</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  view01: {
    flex: 0.5,
    backgroundColor: "#8ac546",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  view02: {
    flex: 0.5,
    backgroundColor: "white",
  },

  textHead: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 30,
  },

  textBoxesContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 20,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 20,
  },

  textBoxes: {
    fontSize: 20,
    fontWeight: "100",
  },

  flexStuff: {
    flexDirection: "row",
    justifyContent: "center"
  }

});

export default Wallet;
