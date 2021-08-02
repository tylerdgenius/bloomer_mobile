import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const RecentVaccination = ({navigation}) => {
  return (
    <View
      style={styles.mainContainer}
    >
      <View style={{}}>
        <Text style={{ fontSize: 35, color: "white", fontWeight: "bold" }}>
          Recent Vaccinations
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 120, color: "white", fontWeight: "bold" }}>
            01
          </Text>
          <View>
            <Text style={{ fontSize: 25, color: "white" }}>Vaccinations</Text>
            <Text style={{ fontSize: 25, color: "white" }}>Completed</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "white", paddingRight: 20 }}>
          Your baby received <Text>Baby Vaccinations </Text> on the
          <Text>12th of June</Text>
        </Text>
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
  }

});

export default RecentVaccination;
