import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const BookVaccinations = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              textAlign: 'center',
            }}>
            Book An Appointment
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={{flex: 1}}>
            {/* <FlatList
              data={children}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#00000095',
    },
    container: {
      marginVertical: 20,
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    topWrapper: {
      flex: 0.1,
      backgroundColor: '#e90388',
      paddingHorizontal: 30,
      paddingVertical: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },
    bottomWraper: {
      flex: 0.9,
    },
    flatListContainer: {
      flex: 1,
    },
  });

export default BookVaccinations;
