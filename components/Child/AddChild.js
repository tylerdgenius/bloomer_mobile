import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const AddChild = props => {
  const [showForm, setShowForm] = useState(true);
  return (
    <View style={styles.mainWrapper}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 20,
        }}>
        <View style={styles.topWrapper}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Add A Child
          </Text>
          <Text style={{color: 'white', fontSize: 13, fontWeight: '200'}}>
            You can add a new child via this popup
          </Text>
        </View>
        <ScrollView style={styles.bottomWrapper}>
          <View>
            <TextInput
              label="Child Name"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setChildName(e)}
              // right={<TextInput.Icon name="account" />}
              style={{
                flex: 0.25,
                borderBottomRightRadius: 20,
                marginTop: 10,
              }}>

              </TextInput>

            <TextInput
              label="Location"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setEmailValue(e)}
              // right={<TextInput.Icon name="account" />}
              style={{
                flex: 0.25,
                borderBottomRightRadius: 20,
                marginTop: 10,
              }}></TextInput>

            <TextInput
              label="Email"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setEmailValue(e)}
              // right={<TextInput.Icon name="account" />}
              style={{
                flex: 0.25,
                borderBottomRightRadius: 20,
                marginTop: 10,
              }}></TextInput>

            <TextInput
              label="Mobile Number"
              mode="outlined"
              outlineColor="white"
              onChangeText={e => setEmailValue(e)}
              // right={<TextInput.Icon name="account" />}
              style={{
                flex: 0.25,
                borderBottomRightRadius: 20,
                marginTop: 10,
              }}></TextInput>

            <TouchableOpacity
              onPress={() => regUser(email, password)}
              style={{
                paddingVertical: 25,
                borderRadius: 10,
                elevation: 25,
                backgroundColor: '#8ac546',
                marginTop: 30,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                ADD CHILD
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#00000098',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  topWrapper: {
    flex: 0.3,
    backgroundColor: '#e90388',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomWrapper: {
    flex: 0.7,
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});

export default AddChild;
