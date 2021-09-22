import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';


//compoenets
import Screen from './../components/Screen';
import NavTitlesAndIcon from '../components/common/NavTitlesAndIcon';

//config
import Colors from '../config/Colors';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';

const { height } = Dimensions.get('window');


function MyStoresScreen(props) {

    const [showModel, setShowModel] = useState(false);

    const data = [
        {
            title: '   Mega Mall, VI',

            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },
        {
            title: '   Mega Mall, VI',
            location: true,
            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },
        {
            title: '   Mega Mall, VI',
            location: true,

            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#F7F7F7" }}>
            {/* Nav Icon and titles */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <NavTitlesAndIcon mainTitle="My Stores" sideTitle="ADD" />
            </View >
            {/* Cart */}
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(4) }}>
                {data.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(3), width: '90%', height: RFPercentage(15), borderRadius: RFPercentage(2), backgroundColor: Colors.white, }}>
                        <View style={{ marginTop: RFPercentage(4), marginLeft: RFPercentage(3) }}>
                            <Text style={{ color: '#313942', fontSize: RFPercentage(2.5), fontFamily: 'Quicksand_500Medium' }}>
                                {item.title}
                            </Text>
                            <Text style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_400Regular' }} >
                                {item.subTitle}
                            </Text>
                            {item.location ?
                                <Image style={{ marginLeft: RFPercentage(-0.7), marginTop: RFPercentage(-2.3) }} source={require('../../assets/images/loc.png')} />
                                :
                                null
                            }
                        </View>
                        <TouchableOpacity onPress={() => setShowModel(true)} style={{ right: RFPercentage(2), position: 'absolute', top: RFPercentage(3) }}>
                            <SimpleLineIcons name="options-vertical" size={RFPercentage(2.5)} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            {/* Menue */}
            <Modal visible={showModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(35), width: "55%" }} >
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
                            <Text onPress={() => setShowModel(false)} style={{ fontFamily: 'Quicksand_500Medium', width: "75%", color: "#313942", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2.5) }} >
                                Create Shelf
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

export default MyStoresScreen;