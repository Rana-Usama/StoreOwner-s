import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';


//config
import Colors from '../../config/Colors';

function NavTitlesAndIcon({ onPress = () => { }, mainTitle, sideTitle, icon = false }) {
    return (
        <View style={{ width: '90%', marginTop: RFPercentage(9), alignItems: 'center', justifyContent: 'center' }}>
            {/* BackIcon */}
            <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-start', }}>
                <Ionicons
                    name="ios-chevron-back-sharp"
                    size={40}
                    color={Colors.lightGrey}
                    style={{
                        fontSize: RFPercentage(3.8),
                        fontWeight: "bold",
                    }}
                    onPress={onPress}
                />
            </TouchableOpacity>
            {/* Main Heading */}
            <View style={{ position: 'absolute', alignSelf: 'center' }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.7), color: Colors.lightGrey }}>
                    {mainTitle}
                </Text>
            </View>
            {/* Text || Icon */}
            {icon ?
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', right: RFPercentage(2.5) }}>
                    <SimpleLineIcons name="options-vertical" size={RFPercentage(2.5)} color={Colors.black} />
                </TouchableOpacity>
                :
                <View style={{ position: 'absolute', alignSelf: 'flex-end', right: RFPercentage(2.5) }}>
                    <Text style={{ fontFamily: "Quicksand_500Medium", color: Colors.lightGrey, fontSize: RFPercentage(1.8) }}>
                        {sideTitle}
                    </Text>
                </View>
            }


        </View>

    );
}

export default NavTitlesAndIcon;