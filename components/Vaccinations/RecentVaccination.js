import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const RecentVaccination = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.firstText}>
          <Text style={styles.mainFirstText}>Recent Vaccinations</Text>
        </View>
        <View>
          <View style={styles.firstRowFlow}>
            <Text style={styles.firstRowText}>01</Text>
            <View style={styles.secondRowFlow}>
              <Text style={styles.secondRowText}>Vaccinations</Text>
              <Text style={styles.secondRowText}>Completed</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Slip Part */}
      <View>
        <View style={styles.bottomSlip}>
          <Text
            style={{
              ...styles.bottomSlipText,
              fontSize: 15,
              color: "#a90056",
              fontWeight: "bold",
            }}
          >
            Your baby received{" "}
            <Text style={styles.bottomSlipText}>Baby Vaccinations</Text> on the
            <Text style={styles.bottomSlipText}> 12th of June</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "flex-start",
    marginHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#e90388",
    marginTop: 30,
    elevation: 20,
    borderRadius: 20,
  },

  firstText: {},

  mainFirstText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },

  firstRowFlow: {
    flexDirection: "row",
    alignItems: "center",
  },

  secondRowFlow: {},

  firstRowText: {
    fontSize: 80,
    color: "#FFCA28",
    fontWeight: "bold",
  },

  secondRowText: {
    fontSize: 20,
    color: "white",
    fontWeight: "100",
  },

  bottomSlip: {
    backgroundColor: "#ff7fd8",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  container: {
    paddingHorizontal: 30,
  },

  bottomSlipText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default RecentVaccination;
