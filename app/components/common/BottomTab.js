import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function BottomTab({ onPressNotification = () => { }, onPressFirstIcon = () => { } }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(11), backgroundColor: Colors.white }}>
            <TouchableOpacity onPress={onPressFirstIcon} style={{ position: 'absolute', left: RFPercentage(4) }}>
                <MaterialIcons name="all-inbox" size={RFPercentage(4)} color={Colors.circle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="add-circle" size={RFPercentage(8)} color={Colors.circle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNotification} style={{ position: 'absolute', right: RFPercentage(4) }}>
                <MaterialIcons name="notifications" size={RFPercentage(4)} color={Colors.circle} />
            </TouchableOpacity>
        </View>
    );
}

export default BottomTab;