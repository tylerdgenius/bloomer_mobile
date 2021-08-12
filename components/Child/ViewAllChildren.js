import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const ViewAllChildren = () => {
  const children = [
    {
      id: 1,
      imageName: 'baby.png',
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
    {
      id: 2,
      imageName: 'baby.png',
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
    {
      id: 3,
      imageName: 'baby.png',
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
  ];


  
  const renderItem = ({item}) => {
    console.log(item)
    return (
      <View style={styles.flatListContainer}>
        <View>
          <Text style={{ color: "black"}}>{item.childName}</Text>
        </View>
      </View>
    );
  };

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
            All Saved Children
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={{flex: 1}}>
            <FlatList
              data={children}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
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

export default ViewAllChildren;
