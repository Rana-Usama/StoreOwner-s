import React, { useState } from 'react';
import { ScrollView, View, Modal, Dimensions, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MiniCard from './../components/common/MiniCard';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get('window');

function MyShelvesScreen(props) {

    const [filterBooking, setFilterBooking] = useState(false);
    const [bookedModel, setBookedModel] = useState(false);
    const [availableButtonModel, setAvailableButtonModel] = useState(false);

    const bookedButtonListData = [
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        }

    ]

    const availableButtonListData = [
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {/* Nav Icon and titles */}
                <NavTitlesAndIcon onPressSideText={() => props.navigation.navigate("CreateShelfStep1")} onPressBackIcon={() => props.navigation.navigate("DashboardScreen")} mainTitle="My Spot" sideTitle="ADD" />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {/*Top Buttons */}
                <TwoButtonsContainer buttonTitle1="Available" buttonTitle2="      Booked     " onPressButton1={() => setFilterBooking(false)} button2Background={filterBooking ? true : false} onPressButton2={() => setFilterBooking(true)} />
            </View>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >

                {filterBooking ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {bookedButtonListData.map((item, i) => (
                            <MiniCard onPressEditIcon={() => setBookedModel(true)} onPressTitle={() => props.navigation.navigate("ViewBookingScreen")} onPressImage={() => props.navigation.navigate("ViewBookingScreen")} number={false} key={i} title1={item.mainTitle} title2={item.subTitle} />
                        ))}
                    </View>
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', top: RFPercentage(1), marginBottom: RFPercentage(35) }}>
                            {availableButtonListData.map((item, i) => (
                                <MiniCard onPressEditIcon={() => setAvailableButtonModel(true)} onPressImage={() => props.navigation.navigate("ViewShelfEditScreen")} onPressTitle={() => props.navigation.navigate("ViewShelfEditScreen")} key={i} title1={item.mainTitle} title2={item.subTitle} />
                            ))}

                        </View>
                    </View>
                }
            </ScrollView>
            {/* Menues */}
            <Modal visible={availableButtonModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(30), width: "55%" }} >
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text onPress={() => setAvailableButtonModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                                Edit Store
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setAvailableButtonModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Deactivate Store
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setAvailableButtonModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Delete Store
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal visible={bookedModel} transparent={true}>
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(30), width: "55%" }} >
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text onPress={() => setBookedModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                                Restock
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setBookedModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Send Photo
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setBookedModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Reports
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Bottom tab */}
            <BottomTab onPressFirstIcon={() => props.navigation.navigate("MyShelvesScreen")} onPressCenterIcon={() => props.navigation.navigate("CreateShelfStep1")} onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
        </Screen>
    );
}

export default MyShelvesScreen;