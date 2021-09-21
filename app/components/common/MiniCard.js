import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function MiniCard({ onPressTitle = () => { }, number = true, title1, title2, onPressImage = () => { } }) {
    return (

        <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'flex-start', height: RFPercentage(15), marginTop: RFPercentage(1.3), borderRadius: RFPercentage(2) }}>
            {/* Image */}
            <TouchableOpacity onPress={onPressImage} style={{ marginLeft: RFPercentage(1.5) }}>
                <Image style={{ width: RFPercentage(10), height: RFPercentage(7) }} source={require('../../../assets/images/building.png')} />
            </TouchableOpacity>
            {/* Titles */}
            <View style={{ left: RFPercentage(1.5), marginBottom: RFPercentage(1.4) }}>
                <TouchableOpacity onPress={onPressTitle} >
                    <Text style={{ fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(2.2) }}>
                        {title1}
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(1.75), color: Colors.lightestGrey }}>
                    {title2}
                </Text>
            </View>
            {/* Counting Circle */}
            {number ?
                <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.circle, borderRadius: RFPercentage(20), width: RFPercentage(3.7), height: RFPercentage(3.7), right: RFPercentage(7), top: RFPercentage(5.3) }}>
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }}>5</Text>
                </View> : null}
            {/*Edit Icon */}
            <TouchableOpacity style={{ right: RFPercentage(2), position: 'absolute', top: RFPercentage(3) }}>
                <SimpleLineIcons name="options-vertical" size={RFPercentage(2.5)} color={Colors.black} />
            </TouchableOpacity>
        </View>
    );
}

export default MiniCard;