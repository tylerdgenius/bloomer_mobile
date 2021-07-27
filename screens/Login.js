import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(true)

  //Store Async Data
  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem(
        'TOKEN_KEY', data
      );
    } catch (error) {
      // Error saving data
      console.log('Error saving Token')
    }
  };

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
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("https://kokofp-319805.wn.r.appspot.com/api/auth/sign-in", user)
      .then((res) => {
        if (res.status === 200) {
          alert("You have successfully logged in");
          return res.data
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .then(async(data) => {
        await _storeData(data)
        // console.log(data)
      })
      .catch((res) => {
        console.log(res);
      });
  }

  return (
    <View style={{ marginVertical: 50, marginHorizontal: 50 }}>
      <Image
        source={require("../assets/bloomer.png")}
        style={{ height: "15%", width: "100%" }}
        resizeMode="contain"
      />
      <TextInput
        label="Email"
        onChangeText={(e) => setTextValue(e)}
        right={<TextInput.Icon name="" />}
        style={{ marginTop: 70 }}
      ></TextInput>
      <TextInput
        label="Password"
        onChangeText={(e) => setPassValue(e)}
        secureTextEntry={checked}
        right={<TextInput.Icon name="eye" onPress={() =>{
          setIsChecked(!checked)
          console.log("Eye Button Clickedr")
        }}/>}
        style={{ marginTop: 20 }}
      ></TextInput>
      <Button
        mode="contained"
        onPress={() => loginUser(email, password)}
        style={{ marginTop: 50, paddingVertical: 20 }}
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
          style={{ height: 30, width: "10%" }}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/social/facebook.png")}
          style={{ height: 30, width: "10%" }}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/social/twitter.png")}
          style={{ height: 30, width: "10%" }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../assets/fingerprint.png")}
          style={{ height: 100, width: "10%" }}
          resizeMode="contain"
        />
      </View>
      {/* <Button
        mode="text"
        onPress={() => navigation.push("Register")}
        style={{ marginTop: 30 }}
      >
        Register
      </Button> */}
    </View>
  );
};

export default Login;
