import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MiniCardWithoutPic from '../components/common/MiniCardWithoutPic';

//config
import Colors from '../config/Colors';

function DashboardScreen(props) {

    const data = [
        {
            number: '44',
            text: 'Requests'
        },
        {
            number: '44',
            text: 'Spaces'
        },
        {
            number: '98400',
            text: 'Payments'
        },
    ]

    const listingsData = [
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply',
        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply',
            pinkBox: true
        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply',
        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply',
            pinkBox: true
        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'

        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#F3F6F9" }}>
            {/* Image background */}
            <ImageBackground style={{ width: '100%', height: RFPercentage(40) }} source={require('../../assets/images/dashboard.png')}>
                <View style={{ backgroundColor: "#F3F6F9", position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(6), borderTopLeftRadius: RFPercentage(3) }}>
                </View>
                {/* Icon */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ marginLeft: RFPercentage(4), marginTop: RFPercentage(6) }}>
                    <Image source={require('../../assets/images/notiDash.png')} />
                </TouchableOpacity>
                <Text style={{ marginLeft: RFPercentage(4), fontSize: RFPercentage(2), color: Colors.white, marginTop: RFPercentage(7) }}>
                    Hi, Ike.
                </Text>
                <Text style={{ marginLeft: RFPercentage(4), fontWeight: 'bold', fontSize: RFPercentage(2.5), color: Colors.white, marginTop: RFPercentage(5) }}>
                    Are you ready to do the most today?
                </Text>
            </ImageBackground>

            {/* White Boxes */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '95%' }}>
                {data.map((item, i) => (
                    <View key={i} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, width: RFPercentage(15), height: RFPercentage(15), borderRadius: RFPercentage(1.5) }}>
                        <Text style={{ color: '#444640', fontSize: RFPercentage(2.8), fontFamily: 'Quicksand_700Bold' }}>
                            {item.number}
                        </Text>
                        <Text style={{ marginTop: RFPercentage(2), color: '#717171', fontFamily: 'Quicksand_400Regular' }}>
                            {item.text}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Headings */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '85%', marginTop: RFPercentage(5) }}>
                <Text style={{ position: 'absolute', left: 0, fontSize: RFPercentage(2.3), color: '#3A3384', fontFamily: 'Montserrat_500Medium' }}>
                    Latest Transactions
                </Text>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ position: 'absolute', right: 0, color: '#717171', fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(1.8) }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Listings */}
            <ScrollView style={{ marginTop: RFPercentage(3), flex: 1, width: '100%' }} >
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2.4), marginBottom: RFPercentage(20) }}>
                    {listingsData.map((item, i) => (
                        <MiniCardWithoutPic key={i} pinkBackground={item.pinkBox} title1={item.firstTitle} title2={item.secondTitle} title3={item.thirdTitle} boxTitle={item.boxTitle} />
                    ))}
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default DashboardScreen;