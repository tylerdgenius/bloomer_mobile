import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(true);
console.log(props.LoadingState)
  //Store Async Data
  // _storeData = async (data) => {
  //   try {
  //     await AsyncStorage.setItem("TOKEN_KEY", data);
  //   } catch (error) {
  //     // Error saving data
  //     console.log("Error saving Token");
  //   }
  // };

  //Retrieve Async Data

  function setTextValue(email) {
    console.log(email);
    setEmail(email);
  }

  function setPassValue(password) {
    console.log(password);
    setPassword(password);
  }

  function loginUser(email, password) {
    props.LoadingState(true)
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("https://kokofpapi.herokuapp.com/api/auth/sign-in", user)
      .then((res) => {
        if (res.status === 200) {
          alert("You have successfully logged in");
          return res.data;
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .then(async (data) => {
        // await _storeData(data);
        props.navigation.push("Dashboard");
        props.LoadingState(false)
        // console.log(data)
      })
      .catch((res) => {
        props.LoadingState(false)
        alert("Cannot verify credentials. Please try logging in again")
        console.log(res);
      });
  }

  return (
    <SafeAreaView>
      <View style={{ marginVertical: 50, marginHorizontal: 50 }}>
        <Image
          source={require("../assets/bloomer.png")}
          style={{ height: "15%", width: "100%" }}
          resizeMode="contain"
        />
        <TextInput
          label="Email"
          mode="outlined"
          outlineColor="white"
          onChangeText={(e) => setTextValue(e)}
          right={<TextInput.Icon name="mail" color="#8ac546" />}
          style={{ marginTop: 70, elevation: 25 }}
        ></TextInput>
        <TextInput
          label="Password"
          mode="outlined"
          outlineColor="white"
          onChangeText={(e) => setPassValue(e)}
          secureTextEntry={checked}
          right={
            <TextInput.Icon
              name="eye"
              color="#8ac546"
              onPress={() => {
                setIsChecked(!checked);
                console.log("Eye Button Clicked");
              }}
            />
          }
          style={{ marginTop: 30, elevation: 25 }}
        ></TextInput>
        <Button
          mode="contained"
          onPress={() => loginUser(email, password)}
          style={{
            marginTop: 50,
            paddingVertical: 20,
            borderRadius: 20,
            elevation: 25,
            color: "white"
          }}
        >
          Login
        </Button>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <Image
            source={require("../assets/social/search.png")}
            style={{ height: 50, width: "10%", marginHorizontal: 15 }}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/social/facebook.png")}
            style={{ height: 50, width: "10%", marginHorizontal: 15 }}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/social/twitter.png")}
            style={{ height: 50, width: "15%", marginHorizontal: 15 }}
            resizeMode="contain"
          />
        </View>
        {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
       <TouchableOpacity onPress={() => console.log("Button Clicked")}>
        <Image
          source={require("../assets/fingerprint.png")}
          style={{ height: 150, width: "40%" }}
          resizeMode="contain"
        /></TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
