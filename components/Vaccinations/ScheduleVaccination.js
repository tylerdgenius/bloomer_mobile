import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const ScheduleVaccination = ({navigation}) => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 20}}>Schedule Vaccinations</Text>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 20}}>Book Now</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        marginTop: 40,
        backgroundColor: '#8ac546',
        borderRadius: 25,
        paddingVertical: 20
    },
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10
    }
})

export default ScheduleVaccination