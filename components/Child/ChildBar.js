import { NavigationHelpersContext } from "@react-navigation/native";
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
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingVertical: 50,
            marginHorizontal: 30
          }}
        >
          <Image
            source={image}
            style={{ height: 150, width: "50%", borderRadius: 50 }}
            resizeMode="contain"
          />

          <View style={{flex: 1, marginRight: 20}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Child's Name</Text>
            <Text>Child's Details are the things we need to add here</Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.childbutton} onPress={() => {
            navigate.push('AddChild')
          }}>
            <Text style={{ color: "white", fontSize: 20 }} >Add Child</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.childbutton} onPress={() => {
            navigate.push('ViewAllChildren')
          }}>
            <Text style={{ color: "white", fontSize: 20 }}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "flex-start",
    paddingLeft: 30,
    marginHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#e90388",
    marginTop: 40,
    elevation: 40,
    borderRadius: 20,
  },
  childbutton: {
    backgroundColor: "#e90388",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    // marginVertical: 10,
    elevation: 30,
    borderRadius: 15,
  },
});

export default ChildBar;
