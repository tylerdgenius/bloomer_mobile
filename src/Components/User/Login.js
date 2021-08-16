import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import axios from 'axios'

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setIsChecked] = useState(true);
  const [error, setError] = useState(false);

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
    props.setLoadingState(true);
    const user = {
      email: email,
      password: password,
    };

    axios
      .post('https://kokofpapi.herokuapp.com/api/auth/sign-in', user)
      .then(res => {
        if (res.status === 200) {
          // alert("You have successfully logged in");
          return res.data;
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .then(async data => {
        // await _storeData(data);
        props.navigation.push('Dashboard');
        props.setLoadingState(false);
        setError(false);
        // console.log(data)
      })
      .catch(res => {
        props.setLoadingState(false);
        alert('Cannot verify credentials. Please try logging in again');
        console.log(res);
        setError(true);
      });
  }

  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.bodyWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/bloomer.png')}
              style={{height: 80, width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              label="Email"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setTextValue(e)}
              // right={<TextInput.Icon name="mail" color="#8ac546" />}
              style={{marginTop: 70}}
              error={error} ></TextInput>
              

            <TextInput
              label="Password"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setPassValue(e)}
              secureTextEntry={checked}
              // right={
              //   <TextInput.Icon
              //     name="eye"
              //     color="#8ac546"
              //     onPress={() => {
              //       setIsChecked(!checked);
              //       console.log('Eye Button Clicked');
              //     }}
              //   />
              // }
              style={{marginTop: 30, elevation: 25}}
              error={error}></TextInput>
          </View>
          <View style={styles.loginBtnWrapper}>
            <TouchableOpacity
              onPress={() => loginUser(email, password)}
              style={{
                marginTop: 50,
                paddingVertical: 25,
                borderRadius: 10,
                elevation: 25,
                backgroundColor: '#8ac546',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.regBtnWrapper}>
            <Button
              mode="text"
              onPress={() => props.navigation.push('Register')}
              style={{marginTop: 30}}>
              Register
            </Button>
          </View>
          {!showDashboard && (
            <View>
              <Button
                mode="text"
                onPress={() => props.navigation.push('Dashboard')}
                style={{marginTop: 30}}>
                Dashboard
              </Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 40,
  },
  imageWrapper: {
    flex: 0.1,
  },
  textInputWrapper: {
    flex: 0.4,
  },
  loginBtnWrapper: {
    flex: 0.3,
  },
  regBtnWrapper: {
    flex: 0.2,
  },
});

export default Login;
