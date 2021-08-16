import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const ViewAllChildren = () => {
  const children = [
    {
      id: 1,
      imageName: require('../../images/face.png'),
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
    {
      id: 2,
      imageName: require('../../images/face.png'),
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
    {
      id: 3,
      imageName: require('../../images/face.png'),
      childName: 'Blessing Osagie',
      totalVaccinationAmount: 5,
      dateVaccinated: Date.now(),
      description: 'He is a ranbuncious child',
      childAge: 8,
      location: 'Lagos',
    },
  ];

  const renderItem = item => {
    return (
      <View style={{flex:1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: "center",
            marginVertical: 20,
            marginHorizontal: 30,
            paddingVertical: 20,
            elevation: 20,
            backgroundColor: "white",
            borderRadius: 20
          }}>
          <View>
            <Image
              source={item.item.imageName}
              style={{height: 50, width: 50}}
              resizeMode="stretch"
            />
          </View>
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 25, fontWeight: "bold"}}>{item.item.childName}</Text>
            <Text>{item.item.description}</Text>
          </View>
        </View>
        <View></View>
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
            Your Children
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={{}}>
            <FlatList
              data={children}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              // horizontal
              style={{marginTop: 40 }}
              showsHorizontalScrollIndicator={false}
              // ItemSeparatorComponent={itemSeperator}
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
    flex: 0.4,
    backgroundColor: '#e90388',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  bottomWraper: {
    flex: 0.7,
    backgroundColor: 'black',
  },
  flatListContainer: {
    flex: 1,
  },
});

export default ViewAllChildren;
