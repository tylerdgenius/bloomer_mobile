import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import { Drawer } from "react-native-paper";

export default function DrawerContent(props) {
  // const color = "black";

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View>
          <Text>This is the drawer Nav</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
