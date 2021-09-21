import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


import MyAppButton from './../components/common/MyAppButton';

import Colors from '../config/Colors';

const { height, width } = Dimensions.get('window')

function WelcomeScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >
            {/* PathImage */}
            <View style={{ position: "absolute", top: 0, right: 0, width: '100%' }}>
                <Image source={require("../../assets/images/path2.png")} style={{ width: "100%", height: RFPercentage(50) }} />
            </View>

            {/* Text */}
            <View style={{ marginTop: RFPercentage(40) }}><Text style={{ fontFamily: 'LibreBaskerville_400Regular', fontSize: RFPercentage(3) }}>Welcome, Chinedu! </Text></View>
            <View style={{ marginTop: RFPercentage(2) }}><Text style={{ fontFamily: 'LibreBaskerville_400Regular', fontSize: RFPercentage(3) }}>Now let’s get you that spot! </Text></View>

            {/* Continue Button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(8) }}>
                <MyAppButton
                    title="CONTINUE"
                    padding={RFPercentage(2.5)}
                    bold={false}
                    onPress={() => props.navigation.navigate("HomeScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"98%"}
                />
            </View>
        </View>
    );
}

export default WelcomeScreen;