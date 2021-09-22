import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//compoenets
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import BottomTab from '../components/common/BottomTab';

function Payments(props) {

    const data = [
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Successful',
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: 'Pending',
            pending: true,
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Successful',
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Successful',
            time: '13:45',
            date: '11- 03- 2021'

        },
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>

            {/* Heading */}
            <Text style={{ fontSize: RFPercentage(2.8), marginTop: RFPercentage(6), color: '#82867D', fontFamily: 'Montserrat_600SemiBold' }}>
                Payments
            </Text>

            {/* Icon */}
            <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                <Image source={require('../../assets/images/noti.png')} />
            </TouchableOpacity>
            {/*Top Buttons */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(-3) }}>
                <TwoButtonsContainer onPressButton1={() => props.navigation.navigate("RequestPayment")} buttonTitle1="Pending" buttonTitle2="     Processed    " button2Background={true} />
            </View>

            {/* Listings */}
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
                    {data.map((item, i) => (
                        <View key={i} style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'flex-start', height: RFPercentage(14), marginTop: RFPercentage(1.3), borderRadius: RFPercentage(2) }}>
                            {/* Titles to the left */}
                            <View style={{ left: RFPercentage(3) }}>
                                <Text style={{ fontSize: RFPercentage(2.5), color: "#313942", fontFamily: 'Quicksand_700Bold' }}>
                                    {item.mainTitle}
                                </Text>
                                <Text style={{ fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(0) }}>
                                    {item.sub1}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1.5), fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(2), color: "#B1A9A9", top: RFPercentage(0.3) }}>
                                    {item.sub2}
                                </Text>
                            </View>
                            {/*Titles to the right */}
                            <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(3), bottom: RFPercentage(2) }}>
                                <Text style={{ color: item.pending ? "#FD6721" : "#58B952", fontSize: RFPercentage(2.2) }}>
                                    {item.sub3Right}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(3), top: RFPercentage(2) }}>
                                <Text style={{ marginRight: RFPercentage(2), color: "#707070", fontSize: RFPercentage(2) }}>
                                    {item.date}
                                </Text>
                                <Text style={{ color: "#707070", fontSize: RFPercentage(2) }}>
                                    {item.time}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
        </Screen>

    );
}

export default Payments;