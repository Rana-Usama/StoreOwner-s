import React from 'react';
import { View, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import NavTitlesAndIcon from '../components/common/NavTitlesAndIcon';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import MiniCardWithoutPic from './../components/common/MiniCardWithoutPic';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function MyBookings(props) {

    const data = [
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'
        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'

        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'

        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'

        },
        {
            firstTitle: 'X Large Shelf',
            secondTitle: 'Heldo Foods',
            thirdTitle: 'One Month',
            boxTitle: 'Awaiting Supply'

        },
    ]


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>

            {/* Nav Icon and titles */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <NavTitlesAndIcon onPressBackIcon={() => props.navigation.navigate("DashboardScreen")} onPressSideText={() => props.navigation.navigate("CreateShelfStep1")} mainTitle="My Bookings" sideTitle="ADD" />
            </View>
            {/* Top Buttons */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <TwoButtonsContainer onPressButton2={() => props.navigation.navigate("MyShelvesScreen")} buttonTitle1="On-going" buttonTitle2="All" />
            </View>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                {/* Notifications Listings */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', top: RFPercentage(3), marginBottom: RFPercentage(28) }}>
                    {data.map((item, i) => (
                        <MiniCardWithoutPic key={i} title1={item.firstTitle} title2={item.secondTitle} title3={item.thirdTitle} boxTitle={item.boxTitle} />
                    ))}
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab onPressFirstIcon={() => props.navigation.navigate("MyShelvesScreen")} onPressCenterIcon={() => props.navigation.navigate("CreateShelfStep1")} onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
        </Screen>

    );
}

export default MyBookings;