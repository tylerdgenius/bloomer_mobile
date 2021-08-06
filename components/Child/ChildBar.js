import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
const image = require("../../images/face.png");
const ChildBar = ({ navigation }) => {
  const vaccinations = [
    {
      id: 1,
      name: "Shaun",
      vaccine: "Malaria-Vaccine",
      message: "Message",
    },
    {
      id: 2,
      name: "Bode",
      vaccine: "Typhoid-Vaccine",
      message: "Something",
    },
    {
      id: 3,
      name: "Ify",
      vaccine: "Malaria-Vaccine",
      message: "Nice job",
    },
    {
      id: 4,
      name: "Tony",
      vaccine: "Malaria-Vaccine",
      message: "Nice job",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.container}>
          <Image source={image} style={styles.imageEdit} resizeMode="contain" />
          <View>
            <Text style={styles.firstRowText}>Child's Name</Text>
            <Text style={styles.firstRowTextDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 30}}>
          <TouchableOpacity style={styles.btn}><Text style={styles.txtColor}>Add Child</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text style={styles.txtColor}>View All</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "#f5f5f5",
    marginTop: 30,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageEdit: {
    height: 70,
    width: "30%",
    borderRadius: 30,
  },

  secondSectionRowText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  secondRow02: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e90388",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    elevation: 30,
    borderRadius: 15,
  },
  firstRowText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  firstRowTextDescription: {
    fontSize: 15,
    width: 220
  },

  btn: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    backgroundColor: "#8ac546",
    borderRadius: 30,
    elevation: 20,
  },

  txtColor: {
    color: "white"
  }
});

export default ChildBar;
