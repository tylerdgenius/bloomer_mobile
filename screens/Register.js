import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import axios from "axios";
import { Checkbox } from "react-native-paper";
// import { AsyncStorage } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState(" ");

  const [checked, setIsChecked] = useState(true);
  const [checkedBox, setIsCheckedBox] = useState(false);

  function setEmailValue(email) {
    console.log(email);
    setEmail(email);
  }

  function setPassValue(password) {
    console.log(password);
    setPassword(password);
  }

  // function setUserValue(username) {
  //   console.log(username);
  //   setUsername(username);
  // }

  function submitUser(email, password) {
    const user = {
      email: email,
      invitationToken: null,
      password: password,
    };

    axios
      .post("https://kokofp-319805.wn.r.appspot.com/api/auth/sign-up", user)
      .then((res) => {
        if (res.status === 200) {
          alert("You have successfully signed up");
        } else {
          throw new Error("Credentials already exist or not allowed")
        }
      })
      .then(() => {
        setTimeout(navigation.push("Login"), 1000);
      })
      .catch((err) => {
        alert("Credentials already exist or not allowed.\nPlease make sure your passord has 1 capital Letter, a number and a symbol");
      }).done();
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
        onChangeText={(e) => setEmailValue(e)}
        right={<TextInput.Icon name="" />}
        style={{ marginTop: 70 }}
      ></TextInput>
      {/* <TextInput
                  label="Username"
                  onChangeText={(e) => setUserValue(e)}
                  right={<TextInput.Icon name="eye" />}
                  style={{ marginTop: 20 }}
                ></TextInput> */}
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
        onPress={() => submitUser(email, password)}
        style={{ marginTop: 50, paddingVertical: 20 }}
      >
        Register
      </Button>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Checkbox.Item
          status={checkedBox ? "checked" : "unchecked"}
          onPress={() => {
            setIsCheckedBox(!checkedBox);
            console.log("Check box pressed")
          }}
          label="I agree to the terms and conditions"
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
        onPress={() => navigation.push("Login")}
        style={{ marginTop: 30 }}
      >
        Login
      </Button> */}
    </View>
  );
}

export default Register;