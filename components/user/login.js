import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login = ({
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
      backgroundColor: "#fff",
      paddingVertical: 10,
      marginTop: 10,
      paddingHorizontal: 20,
      elevation: 40,
      borderRadius: 13,
    },
    loginBtn: {
      backgroundColor: "#8ac546",
      borderRadius: 13,
      width: useWindowDimensions().width * 0.85,
      paddingVertical: 20,
      elevation: 30,
      marginTop: 30,
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
        flex: 1,
      }}
    >
      <View style={{ flex: 3 }}>
        <Image
          source={logo}
          style={{ height: "100%", width: "100%", flex: 1 }}
          resizeMode="cover"
        />
      </View>

      <View style={{ flex: 5 }}>
        <View style={{ flex: 1, marginHorizontal: 40 }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontWeight: "bold" }}>Username:</Text>
            <TextInput
              placeholder={userPlaceholder}
              style={styles.textInsert}
            ></TextInput>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontWeight: "bold" }}>Password:</Text>
            <TextInput style={styles.textInsert} secureTextEntry></TextInput>
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 0.6,
            }}
          >
            <TouchableOpacity style={styles.loginBtn}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flex: 1.5 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.15, alignItems: "center" }}>
            <Text>
              or <Text style={{ fontWeight: "bold" }}>Login with Social </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              flex: 0.85,
            }}
          >
            <Image source={fbIcon} style={styles.iconsStyle} />
            <Image source={googleIcon} style={styles.iconsStyle} />
            <Image source={twitterIcon} style={styles.iconsStyle} />
          </View>
        </View>
      </View>
      
      <View style={{ flex: 0.5, alignItems: "center" }}>
        <Text>
          or <Text style={{ fontWeight: "bold" }}>Login with FingerID </Text>
        </Text>
      </View>
      <View style={{ flex: 1.5, alignItems: "center" }}>
        <Image
          source={fingerImage}
          style={{ height: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 0.5, alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity onPress={() => {
          navigation.push('Register')
        }}>
          <Text>
            Don't Have An Account? <Text style={{ fontWeight: "bold" }}>Register </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backBtn}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Login;
