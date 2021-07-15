import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

const Register = ({
  navigation,
  logo,
  userPlaceholder,
  fingerImage,
  googleIcon,
  fbIcon,
  twitterIcon,
}) => {
  const styles = StyleSheet.create({
    textInsert: {
      paddingVertical: 20,
      backgroundColor: "#fff",
      marginTop: 10,
      borderRadius: 15,
      paddingHorizontal: 20,
      elevation: 30,
    },
    loginBtn: {
      backgroundColor: "#8ac546",
      borderRadius: 15,
      width: useWindowDimensions().width * 0.8,
      paddingVertical: 30,
      elevation: 30,
    },
    backBtn: {
      paddingVertical: 20,
      backgroundColor: "#fff",
      borderRadius: 15,
      paddingHorizontal: 80,
      elevation: 30,
    },
    iconsStyle: {
      height: 20,
      width: 20,
      marginHorizontal: 10,
    },
  });
  return (
    <View
      style={{
        height: useWindowDimensions().height,
        width: useWindowDimensions().width,
        backgroundColor: "#f3ffe6",
      }}
    >
      <ImageBackground
        source={fingerImage}
        style={{ height: "100%", width: "100%", alignItems: "center" }}
        resizeMode="contain"
      >
        <Image
          source={logo}
          style={{ height: "17%", width: "100%" }}
          resizeMode="cover"
        />
        <View
          style={{ marginTop: 100, width: useWindowDimensions().width * 0.8 }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Username:</Text>
            <TextInput
              placeholder={userPlaceholder}
              style={styles.textInsert}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Email Address:</Text>
            <TextInput
              placeholder="e.g johndoe@yourdomainname.com"
              style={styles.textInsert}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Password:</Text>
            <TextInput
              style={styles.textInsert}
              secureTextEntry
            ></TextInput>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 40,
              paddingHorizontal: 50,
            }}
          >
            <TouchableOpacity style={styles.loginBtn}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text>
            or <Text style={{ fontWeight: "bold" }}>Register with Social </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Image source={fbIcon} style={styles.iconsStyle} />
          <Image source={googleIcon} style={styles.iconsStyle} />
          <Image source={twitterIcon} style={styles.iconsStyle} />
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backBtn}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
