import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import NotificationsCard from './../components/common/NotificationsCard';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';


function NotificationScreen(props) {

    const data = [
        {
            firstTitle: 'New Shelf Order Request',
            secondTitle: '1 month rental',
            thirdTitle: ' Heldo Foods Nigeria Limited'
        },
        {
            firstTitle: 'New Shelf Order Request',
            secondTitle: '1 month rental',
            thirdTitle: ' Heldo Foods Nigeria Limited'
        },
        {
            firstTitle: 'New Shelf Order Request',
            secondTitle: '1 month rental',
            thirdTitle: ' Heldo Foods Nigeria Limited'
        },
        {
            firstTitle: 'New Order Assigned',
            secondTitle: '45 Mins Express order :  ',
            thirdTitle: ' 14b Wole ariyo street, Lekki phase 1',
            location: true
        },
        {
            firstTitle: 'New Order Assigned',
            secondTitle: '45 Mins Express order :  ',
            thirdTitle: ' 14b Wole ariyo street, Lekki phase 1',
            location: true
        },

    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            {/* Heading */}
            <Text style={{ fontSize: RFPercentage(2.3), marginTop: RFPercentage(9), color: '#82867D', fontFamily: 'Montserrat_500Medium' }}>
                Notifications
            </Text>

            {/* Icon */}
            <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(10.2), left: RFPercentage(4) }}>
                <Image source={require('../../assets/images/noti.png')} />
            </TouchableOpacity>

            {/* Listings */}
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white, width: '100%', height: RFPercentage(65), marginTop: RFPercentage(5), borderTopLeftRadius: RFPercentage(8), borderTopRightRadius: RFPercentage(8) }}>
                <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%', borderTopLeftRadius: RFPercentage(8), borderTopRightRadius: RFPercentage(8) }} >
                    <View style={{ position: 'absolute', alignSelf: 'center', top: RFPercentage(2), width: RFPercentage(6), height: RFPercentage(0.7), borderRadius: RFPercentage(30), backgroundColor: '#82867D' }}></View>
                    {data.map((item, i) => (
                        <NotificationsCard key={i} locationIcon={item.location} title1={item.firstTitle} title2={item.secondTitle} title3={item.thirdTitle} />
                    ))}
                    <View style={{ marginBottom: RFPercentage(15) }}></View>
                </ScrollView>
            </View>

            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default NotificationScreen;