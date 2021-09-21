import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

//config
import MyAppBar from '../components/common/MyAppBar';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get("window")

function SentCodeScreen(props) {
    return (
        <View style={{ flex: 1 }} >
            {/* navbar */}
            <MyAppBar props={props} backPath="LoginNumberScreen" />
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }} >
                <TouchableOpacity onPress={() => props.navigation.navigate("TypeCode")}>
                    <Image source={require('../../assets/images/hand.png')} style={{ marginBottom: RFPercentage(4), width: RFPercentage(25), height: RFPercentage(30) }} ></Image>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default SentCodeScreen;