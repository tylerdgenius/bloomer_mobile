import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Text} from 'react-native-paper';
import BookVaccinations from './BookVaccination';

const ScheduleVaccination = ({navigation}) => {
  const [showBookNow, setShowBookNow] = useState(false);
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
          Schedule Vaccinations
        </Text>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => {
            setShowBookNow(true)
          }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#e90388'}}>
              Book Now
            </Text>
          </TouchableOpacity>
          {<Image />}
          {showBookNow && (
            <Modal onRequestClose={() => setShowBookNow(false)}>
              <BookVaccinations />
            </Modal>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 15,
    marginTop: 25,
    backgroundColor: '#8ac546',
    borderRadius: 20,
    paddingVertical: 15,
    elevation: 20,
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ScheduleVaccination;
