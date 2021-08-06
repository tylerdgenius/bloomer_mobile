import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text  } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="calendar-alt" 
                            color={color}
                            size={size}
                            solid
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />

                </View>
            </DrawerContentScrollView>
        </View>
    )
}