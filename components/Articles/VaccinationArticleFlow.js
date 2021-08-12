import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import SingleVaccineArticle from './SingleVaccinationArticle'

const VaccinationArticleFlow = () => {
  const [hasScheduledVaccinations, setHasScheduledVaccinations] =
    useState(false);

  const vaccinations = [
    {
      id: 1,
      title: "Today's Vaccine Story",
      body: "Some parents don't fully understand what vaccination really does for children. I had a parent once tell me she doesn't believe that vaccines are the ideal way for us to progress",
    },
    {
      id: 2,
      title: "Great life Vaccination",
      body: "I just want to continually show people love and good living through Vaccination. If they have an issue with it, then I might just vaccinate them again.",
    },
    {
      id: 3,
      title: "Vaccination in life",
      body: "Millions of people are stuck deliberating on the best methods to use to vaccinate their children. All I want is a good way to vaccinate my kids. Is that so hard to ask for?",
    },
    {
      id: 4,
      title: "Vaccination in space",
      body: "Everyday around the world, millions of people are stuck deliberating on the best methods to use to vaccinate their children. This causes a host of great issues to arise as things progress",
    },
  ];


  const [showSingleVaccinePage, setSingleVaccinePage] = useState(false);

  const itemSeperator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    );
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => {
        setSingleVaccinePage(true)
      }}>
      <View style={styles.container}>
        <Text>{item.item.title}</Text>
        {/* <Text>{item.item.body}</Text> */}
        {showSingleVaccinePage && (
            <Modal onRequestClose={() => {
              setSingleVaccinePage(false)
            }}>
              <SingleVaccineArticle />
            </Modal>
          )}
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstText}>
        <Text style={styles.mainFirstText}>Vaccination Article</Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 0.5,
            borderColor: "#dbdbdb",
            width: "50%",
          }}
        ></View>
      </View>
      <View style={styles.flats}>
        {!hasScheduledVaccinations ? (
          <FlatList
            data={vaccinations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={itemSeperator}
          />
        ) : (
          <View style={styles.conditionalRendering}>
            <Text style={{color: "white"}}>No Vaccination Articles</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e90388",
    marginHorizontal: 30,
    marginTop: 30,
    paddingVertical: 20,
    paddingBottom: 30,
    borderRadius: 20,
    elevation: 20,
    paddingHorizontal: 30,
  },
  firstText: {},

  container: {
    marginTop: 20,
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 40,
    paddingHorizontal: 50,
    elevation: 20,
  },

  mainFirstText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },

  flats: {
    // marginBottom: 100,
    //     // paddingHorizontal: 30,
    //     borderRadius: 20,
  },
  conditionalRendering: {
    color: "white",
    marginVertical: 50,
  },
});

export default VaccinationArticleFlow;
