import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import axios from 'axios';
import {Checkbox} from 'react-native-paper';

export default function Register(props) {
  console.log(props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      .post('https://kokofpapi.herokuapp.com/api/auth/sign-up', user)
      .then(res => {
        if (res.status === 200) {
          alert('You have successfully registered');
          return res.data;
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .then(async data => {
        // await _storeData(data);
        props.navigation.push('Login');
        props.LoadingState(false);
        // console.log(data)
      })
      .catch(res => {
        props.LoadingState(false);
        alert(
          'There was an error with your registration. Please try again.\nInclude a capital letter, number and a symbol when trying to sign up.',
        );
        console.log(res);
        setError(true);
      });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
            <View style={styles.innerTextWrapper}>
              <View style={{flex: 0.99}}>
                <TextInput
                  label="First Name"
                  mode="outlined"
                  outlineColor="white"

                  onChangeText={e => setEmailValue(e)}
                  right={<TextInput.Icon name="account" />}
                  style={{flex: 0.25, borderBottomRightRadius: 20}}
                  error={error} ></TextInput>
                  

                <TextInput
                  label="Last Name"
                  mode="outlined"
                  outlineColor="white"
                  onChangeText={e => setEmailValue(e)}
                  right={<TextInput.Icon name="account" />}
                  style={{flex: 0.25}}
                  error={error}></TextInput>

                <TextInput
                  label="Email"
                  mode="outlined"
                  outlineColor="white"
                  onChangeText={e => setEmailValue(e)}
                  right={<TextInput.Icon name="account" />}
                  style={{flex: 0.25}}
                  error={error}></TextInput>

                <TextInput
                  label="Password"
                  mode="outlined"
                  outlineColor="white"
                  onChangeText={e => setPassValue(e)}
                  secureTextEntry={checked}
                  right={
                    <TextInput.Icon
                      name="account"
                      onPress={() => {
                        setIsChecked(!checked);
                        console.log('Eye Button Clickedr');
                      }}
                      error={error}
                    />
                  }
                  style={{flex: 0.25}}></TextInput>
              </View>
            </View>
            {/* <View
              style={{
                flex: 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Checkbox.Item
                status={checkedBox ? 'checked' : 'unchecked'}
                onPress={() => {
                  setIsCheckedBox(!checkedBox);
                  console.log('Check box pressed');
                }}
                label="I agree to the terms and conditions"
              />
            </View> */}
          </View>
          <View style={styles.regBtnWrapper}>
            <TouchableOpacity
              onPress={() => regUser(email, password)}
              style={{
                
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
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginBtnWrapper}>
            <Button
              mode="text"
              onPress={() => props.navigation.push('Login')}
              style={{}}>
              Login
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 40,
  },
  imageWrapper: {
    flex: 0.25,
  },
  textInputWrapper: {
    flex: 0.5,
    marginTop: 10,
    // backgroundColor: 'white',

    // elevation: 20,
    borderRadius: 20,
    marginBottom: 20,
    paddingBottom: 10,
  },
  regBtnWrapper: {
    flex: 0.20,
    marginTop: 20,
  },
  loginBtnWrapper: {
    flex: 0.1,
  },
  innerTextWrapper: {
    flex: 0.99,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
});
