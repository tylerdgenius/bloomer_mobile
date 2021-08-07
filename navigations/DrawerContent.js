import React from "react";

import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/FontAwesome5";
import { Drawer } from "react-native-paper";

export default function DrawerContent(props) {

    // const color = "black";

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <DrawerContentScrollView {...props}>
          <View>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar-alt" color={color} size={size} solid />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
          </View>
        </DrawerContentScrollView>
        <Drawer.Section>
            <DrawerItem icon={({ color, size }) => (
                <Icon name="sign-out" color={color} size={size} solid />
              )}>

            </DrawerItem>
        </Drawer.Section>
      </SafeAreaView>
    </View>
  );
}
