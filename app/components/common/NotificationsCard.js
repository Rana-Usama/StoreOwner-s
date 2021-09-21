import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function NotificationsCard({ title1, title2, title3, locationIcon = false }) {

    const [backgroundColor, setBackgroundColor] = useState(false)

    return (
        <TouchableOpacity onPress={() => setBackgroundColor(true)} style={{ justifyContent: 'center', marginVertical: RFPercentage(-7), marginTop: RFPercentage(8), alignSelf: 'center', width: '90%', height: RFPercentage(16), borderRadius: RFPercentage(1), backgroundColor: backgroundColor ? Colors.white : '#F2F7FC' }}>

            {/* icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1), top: RFPercentage(3) }}>
                {backgroundColor ? <Image source={require('../../../assets/images/arrowdark.png')} />
                    :
                    <Image source={require('../../../assets/images/arrow.png')} />
                }
            </TouchableOpacity>

            {/* location icon */}
            {locationIcon ? <View style={{ position: 'absolute', left: RFPercentage(6.4), top: RFPercentage(9.7) }}>
                <MaterialIcons name="location-on" size={24} color={Colors.iconOrange} />
            </View> : null}


            {/* Headings */}
            <View style={{ marginLeft: RFPercentage(7) }}>
                <Text style={{ bottom: RFPercentage(1), color: backgroundColor ? "#717171" : Colors.iconOrange, fontFamily: 'Montserrat_600SemiBold', fontSize: RFPercentage(2.5) }}>
                    {title1}
                </Text>
                <Text style={{ bottom: RFPercentage(0.3), color: backgroundColor ? "#F2994A" : Colors.yellow, fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2) }}>
                    {title2}
                </Text>
                <Text style={{ left: locationIcon ? RFPercentage(3) : RFPercentage(0), top: RFPercentage(1), color: backgroundColor ? "#82867D" : Colors.lightGrey, fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(2.1) }}>
                    {title3}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default NotificationsCard;