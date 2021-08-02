import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const DueVaccinations = ({navigation}) => {
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
  const renderItem = (item) => {
    return (
      <View style={styles.mainContainer}>
        <Text>Child Name</Text>
        <Text>Child Vaccine</Text>
        <Text>Child Message</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainCont}>
      <Text style={styles.textHeading}>Next Due Vaccines</Text>
      <View>
        <FlatList
          data={vaccinations}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "flex-start",
    marginHorizontal: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "white",
    marginTop: 30,
    elevation: 40,
    borderRadius: 10,
  },
  textHeading: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 35,
    marginTop: 30,
  },
  mainCont: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 50,
    marginTop: 40,
  },
});

export default DueVaccinations;
