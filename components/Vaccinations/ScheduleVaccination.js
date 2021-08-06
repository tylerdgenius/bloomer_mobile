import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const ScheduleVaccination = ({ navigation }) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: "white", marginLeft: 10 }}>
          Schedule Vaccinations
        </Text>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#e90388" }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
          {<Image />}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    paddingHorizontal: 15,
    marginTop: 25,
    backgroundColor: "#8ac546",
    borderRadius: 20,
    paddingVertical: 15,
    elevation: 20,
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ScheduleVaccination;
