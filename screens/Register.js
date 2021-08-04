import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import axios from "axios";
import { Checkbox } from "react-native-paper";
// import { AsyncStorage } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(true);
  const [checkedBox, setIsCheckedBox] = useState(false);
  const [error, setError] = useState(false);

  function setEmailValue(email) {
    console.log(email);
    setEmail(email);
  }

  function setPassValue(password) {
    console.log(password);
    setPassword(password);
  }

  function submitUser(email, password) {
    props.LoadingState(true);
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("https://kokofpapi.herokuapp.com/api/auth/sign-up", user)
      .then((res) => {
        if (res.status === 200) {
          alert("You have successfully registered");
          return res.data;
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .then(async (data) => {
        // await _storeData(data);
        props.navigation.push("Login");
        props.LoadingState(false);
        // console.log(data)
      })
      .catch((res) => {
        props.LoadingState(false);
        alert(
          "There was an error with your registration. Please try again.\nInclude a capital letter, number and a symbol when trying to sign up."
        );
        console.log(res);
        setError(true);
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
          onChangeText={(e) => setEmailValue(e)}
          right={<TextInput.Icon name="" />}
          style={{ marginTop: 70, elevation: 25 }}
          error={error}
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
              onPress={() => {
                setIsChecked(!checked);
                console.log("Eye Button Clickedr");
              }}
              error={error}
            />
          }
          style={{ marginTop: 20 }}
        ></TextInput>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Checkbox.Item
            status={checkedBox ? "checked" : "unchecked"}
            onPress={() => {
              setIsCheckedBox(!checkedBox);
              console.log("Check box pressed");
            }}
            label="I agree to the terms and conditions"
          />
        </View>

        <Button
          mode="contained"
          onPress={() => submitUser(email, password)}
          style={{
            marginTop: 30,
            paddingVertical: 20,
            borderRadius: 20,
            elevation: 25,
            color: "white",
          }}
        >
          Register
        </Button>

        {/* <View
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
        </View> */}

        {/* <View
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
        </View> */}

        <Button
          mode="text"
          onPress={() => props.navigation.push("Login")}
          style={{ marginTop: 30 }}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Register;
