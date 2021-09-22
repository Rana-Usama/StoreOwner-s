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

    const [showModel, setShowModel] = useState(false);

    const data = [
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
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Nav Icon and titles */}
                    <NavTitlesAndIcon mainTitle="My Spots" sideTitle="ADD" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/*Top Buttons */}
                    <TwoButtonsContainer buttonTitle1="Available" buttonTitle2="Booked" onPressButton2={() => props.navigation.navigate("MyShelvesBookedScreen")} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Listings */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', top: RFPercentage(1), marginBottom: RFPercentage(35) }}>
                        {data.map((item, i) => (
                            <MiniCard onPressEditIcon={() => setShowModel(true)} onPressImage={() => props.navigation.navigate("ViewShelfEditScreen")} onPressTitle={() => props.navigation.navigate("ViewShelfEditScreen")} key={i} title1={item.mainTitle} title2={item.subTitle} />
                        ))}

                    </View>
                </View>
            </ScrollView>
            {/* Menue */}
            <Modal visible={showModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(30), width: "55%" }} >
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(4) }} >
                                Edit Store
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Deactivate Store
                            </Text>
                            <View style={{ marginTop: RFPercentage(2), width: '70%', height: RFPercentage(0.2), backgroundColor: '#9597A6' }}></View>
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Delete Store
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

export default MyShelvesScreen;