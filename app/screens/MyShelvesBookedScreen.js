import React, { useState } from 'react';
import { ScrollView, View, Modal, Dimensions, Text } from 'react-native'

//components
import Screen from './../components/Screen';
import MiniCard from './../components/common/MiniCard';
import TwoButtonsContainer from '../components/common/TwoButtonsContainer';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';


const { height } = Dimensions.get('window');

function MyShelvesBookedScreen(props) {

    const [showModel, setShowModel] = useState(false);


    const data = [
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        }

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                {/* Nav Icon and titles */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <NavTitlesAndIcon onPressSideText={() => props.navigation.navigate("MyBookings")} onPress={() => props.navigation.navigate("MyShelvesScreen")} mainTitle="My Spots" sideTitle="BOOK" />
                </View>
                {/*Top Buttons */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <TwoButtonsContainer onPressButton1={() => props.navigation.navigate("MyShelvesScreen")} buttonTitle1="Available" buttonTitle2="      Booked      " button2Background={true} />
                </View>
                {/* Listings */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {data.map((item, i) => (
                        <MiniCard onPressEditIcon={() => setShowModel(true)} onPressTitle={() => props.navigation.navigate("ViewBookingScreen")} onPressImage={() => props.navigation.navigate("ViewBookingScreen")} number={false} key={i} title1={item.mainTitle} title2={item.subTitle} />
                    ))}
                </View>
            </ScrollView>
            {/* Menue */}
            <Modal visible={showModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(30), width: "55%" }} >
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                                Restock
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Send Photo
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Reports
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Bottom tab */}
            <BottomTab onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
        </Screen>
    );
}

export default MyShelvesBookedScreen;