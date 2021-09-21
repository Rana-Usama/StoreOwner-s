import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from "@expo/vector-icons";

//config
import Colors from '../../config/Colors';

function MyAppBar({ props, backPath }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <View style={{ position: 'absolute', left: RFPercentage(2), bottom: RFPercentage(2.5) }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate(backPath)} >
                    <Ionicons
                        name="arrow-back"
                        size={40}
                        color={Colors.white}
                        style={{ fontSize: RFPercentage(3.6), fontWeight: "bold" }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: RFPercentage(2.5) }}>
                <Text style={{ color: Colors.white, fontFamily: 'Philosopher_700Bold', fontSize: RFPercentage(3) }}>
                    Login Into RetailSpot
                </Text>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: RFPercentage(11),
        borderBottomLeftRadius: RFPercentage(3.3),
        borderBottomRightRadius: RFPercentage(3.3),
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
    }
})

export default MyAppBar;