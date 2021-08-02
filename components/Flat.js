import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import RecentVaccination from "./Vaccinations/RecentVaccination";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import CustomMenuBar from "./Bar/MenuBar";
import ScheduleVaccination from "./Vaccinations/ScheduleVaccination";
import DueVaccinations from "./Vaccinations/DueVaccinations";

const height = useWindowDimensions.height;
const width = useWindowDimensions.width;

const Flat = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <CustomMenuBar />
      </View>
      <ScrollView style={{}}>
        <View style={styles.mainContainer}>
          {/* First Section */}

          {/* Second Section */}
          <View style={{}}>
            <RecentVaccination />
          </View>

          {/* Third Section */}
          <View style={{}}>
            <ScheduleVaccination />
          </View>

          {/* Fourth Section */}
          <View>
            <DueVaccinations />
          </View>

          <View style={{}}>
            <RecentVaccination />
          </View>

          <View style={{}}>
            <RecentVaccination />
          </View>

          <View style={{paddingTop: 70, paddingBottom: 70}}>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: "white",
  },
});

export default Flat;
