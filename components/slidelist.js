import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const SlideList = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const slides = [
    {
      id: "1",
      description:
        "Bloomer has been specially designed for parents to be notified of the vaccination dates and keep track of the vaccination schedules for their child.",
      image: require("../assets/img/bg/bloom02.png"),
    },
    {
      id: "2",
      description:
        "Immunization is one of the most effective and cost-effective ways to protect children’s lives and futures.",
      image: require("../assets/img/bg/bloom01.png"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ height: windowHeight * 0.6, width: windowWidth }}>
        <Image
          source={item.image}
          style={{ height: "80%", width: "100%" }}
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item.description}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    itemText: {
      textAlign: "center",
      fontSize: 20,
      paddingHorizontal: 50,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 50,
    },

    buttonStyle: {
      paddingHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#e90388",
      marginLeft: 50,
    },
    buttonStyle02: {
      backgroundColor: "#8ac546",
      paddingHorizontal: 50,
      paddingVertical: 20,
      borderRadius: 20,
      elevation: 20,
      shadowColor: "#c0c0c0",
      shadowOpacity: 0.3,
      marginRight: 50,
    },
    iconsStyle: {
      height: 20,
      width: 20,
      marginHorizontal: 10
    },
  });

  const logo = require("../assets/img/logo/bloomer.png");
  const googleIcon = require("../assets/img/social/search.png");
  const fbIcon = require("../assets/img/social/facebook.png");
  const twitterIcon = require("../assets/img/social/twitter.png");

  return (
    <View style={{ backgroundColor: "#f5f5f5" }}>
      <Image
        source={logo}
        style={{ height: "17%", width: "100%" }}
        resizeMode="cover"
      />
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={{ height: "10%" }}>
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          or{" "}
          <Text style={{ fontWeight: "bold" }}>Login using Social Media</Text>
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}>
          <Image source={fbIcon} style={styles.iconsStyle} />
          <Image source={googleIcon} style={styles.iconsStyle} />
          <Image source={twitterIcon} style={styles.iconsStyle} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle02} onPress={() => navigation.push('Login')}>
          <Text style={{ color: "#fff", paddingHorizontal: 20 }}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.push('Register')}>
          <Text style={{ color: '#e90388'}}> Register </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideList;
