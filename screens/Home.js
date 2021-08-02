import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";


const Home = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#8ac546",
          height: "28%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            console.log("Button Clicked");
          }}
        >
          <Image
            source={require("../images/1.png")}
            style={{
              height: 10,
              width: 20,
              marginTop: 50,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hi Goodness
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../images/g.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            alignItems: "flex-start",
            paddingLeft: 30,
            marginHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: "#e90388",
            marginTop: 50,
            elevation: 40,
            borderRadius: 20,
          }}
        >
          <View style={{}}>
            <Text style={{ fontSize: 35, color: "white", fontWeight: "bold" }}>
              Recent Vaccinations
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 120, color: "white", fontWeight: "bold" }}
              >
                01
              </Text>
              <View>
                <Text style={{ fontSize: 25, color: "white" }}>
                  Vaccinations
                </Text>
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
      </View>
      <View
        style={{
          alignItems: "flex-start",
          marginHorizontal: 30,
          backgroundColor: "#8ac546",
          marginTop: 50,
          elevation: 40,
          borderRadius: 20,
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text>Schedule A Vaccination </Text>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                elevation: 20,
              }}
            >
              <Text style={{ color: "#e90388", paddingHorizontal: 20, paddingVertical: 10  }}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
