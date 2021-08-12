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
import ChildBar from "./Child/ChildBar";
import VaccinationArticleFlow from "./Articles/VaccinationArticleFlow";

const height = useWindowDimensions.height;
const width = useWindowDimensions.width;

const Flat = (props) => {
console.log(props)

  return (
    <SafeAreaView>
      {/* Custom Menu Bar */}
      <View>
        <CustomMenuBar navigation={props.navigation} color="white"/>
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          {/* To view the recent vaccinations */}
          <View>
            <RecentVaccination />
          </View>

          {/* To render the ScheduleVaccination component */}
          <View>
            <ScheduleVaccination />
          </View>

          {/* To render the DueVaccinations component */}
          <View>
            <DueVaccinations />
          </View>

          {/* To render the ChildBar component */}
          <View style={{}}>
            <ChildBar />
          </View>

          { /* To render the Vaccinations Articles component */}
          <View style={{}}>
            <VaccinationArticleFlow />
          </View>

          {/* To render spacing at the bottom*/}
          <View style={{ paddingTop: 50, paddingBottom: 50 }}></View>
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
