import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const DueVaccinations = ({ navigation }) => {
  const [hasScheduledVaccinations, setHasScheduledVaccinations] =
    useState(false);

  const vaccinations = [
    {
      id: 1,
      name: "Blessing Osagie",
      vaccine: "Tetanus",
      message: "Baby is Healthy",
    },
    {
      id: 2,
      name: "Blessing Osagie",
      vaccine: "Rotavirus (RV) RV1 (2-dose series)",
      message: "Baby is Healthy",
    },
    {
      id: 3,
      name: "Blessing Osagie",
      vaccine: "Haemophilus Influenza",
      message: "Baby is Healthy",
    },
    {
      id: 4,
      name: "Blessing Osagie",
      vaccine: "Pneumococcal conjugate (PCV13)",
      message: "Baby is Healthy",
    },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.mainContainer}>
        <Text>{item.item.name}</Text>
        <Text>{item.item.vaccine}</Text>
        <Text>{item.item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainCont}>
      <Text style={styles.textHeading}>Next Due Vaccines</Text>
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 10,
          borderWidth: 0.5,
          borderColor: "#dbdbdb",
          width: "50%",
        }}
      ></View>
      <View style={styles.flats}>
        {!hasScheduledVaccinations ? (
          <FlatList
            data={vaccinations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.conditionalRendering}>
            <Text>No Upcoming Vaccinations</Text>
          </View>
        )}
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
    marginTop: 20,
    marginBottom: 20,
    elevation: 10,
    borderRadius: 10,
  },
  textHeading: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 35,
    marginTop: 20,
  },
  mainCont: {
    backgroundColor: "white",
    // paddingBottom: 50,
    marginTop: 30,
    marginHorizontal: 30,
    elevation: 40,
    borderRadius: 20,
  },
  flats: {
    marginBottom: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  conditionalRendering: {
    
    marginVertical: 50,
  },
});

export default DueVaccinations;
