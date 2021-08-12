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



const children = [{
    id: 2,
    imageName: 'baby.png',
    childName: 'Blessing Osagie',
    totalVaccinationAmount: 5,
    dateVaccinated: Date.now(),
    description: 'He is a ranbuncious child',
    childAge: 8,
    location: 'Lagos',
  }],