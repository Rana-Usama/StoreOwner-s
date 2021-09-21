import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//compoenets
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';

function Payments(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>

            {/* Heading */}
            <Text style={{ fontSize: RFPercentage(2.8), marginTop: RFPercentage(9), color: '#82867D', fontFamily: 'Montserrat_600SemiBold' }}>
                Payments
            </Text>

            {/* Icon */}
            <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                <Image source={require('../../assets/images/noti.png')} />
            </TouchableOpacity>
            {/*Top Buttons */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <TwoButtonsContainer buttonTitle1="Pending" buttonTitle2="     Processed    " button2Background={true} />
            </View>

            {/* Listings */}
            <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'flex-start', height: RFPercentage(14), marginTop: RFPercentage(1.3), borderRadius: RFPercentage(2) }}>
                {/* Titles to the left */}
                <View style={{ left: RFPercentage(4) }}>
                    <Text style={{ fontSize: RFPercentage(2.5), color: "#313942", fontFamily: 'Quicksand_700Bold' }}>
                        Prime Shelf Rental
                    </Text>
                    <Text style={{ fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(0) }}>
                        Heldo Foods
                    </Text>
                    <Text style={{ marginTop: RFPercentage(1.5), fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(2), color: "#B1A9A9", top: RFPercentage(0.3) }}>
                        N54,000
                    </Text>
                </View>
                {/* Right Text */}
                <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(3), bottom: RFPercentage(2) }}>
                    <Text style={{ color: "#58B952", fontSize: RFPercentage(2.5) }}>
                        Successful
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(3), top: RFPercentage(2) }}>
                    <Text style={{ marginRight: RFPercentage(2), color: "#707070", fontSize: RFPercentage(2.5) }}>
                        11- 03- 2021
                    </Text>
                    <Text style={{ color: "#707070", fontSize: RFPercentage(2.5) }}>
                        13:45
                    </Text>
                </View>
            </View>
        </Screen>

    );
}

export default Payments;