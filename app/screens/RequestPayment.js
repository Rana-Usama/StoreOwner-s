import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//compoenets
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';
import PopUp from './../components/common/PopUp';


const { height } = Dimensions.get('window');

function RequestPayment(props) {

    const [showModel, setShowModel] = useState(false);
    const [secondModel, setSecondModel] = useState(false);

    const data = [
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Request',
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: 'Request',
            // pending: true,
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Request',
            time: '13:45',
            date: '11- 03- 2021'

        },
        {
            mainTitle: 'Prime Shelf Rental',
            sub1: 'Heldo Foods',
            sub2: ' N54,000',
            sub3Right: ' Request',
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
                <TwoButtonsContainer onPressButton2={() => props.navigation.navigate("Payments")} buttonTitle1="Pending" buttonTitle2="     Processed    " />
            </View>

            {/* Listings */}
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
                    {data.map((item, i) => (
                        <View key={i} style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'flex-start', height: RFPercentage(14), marginTop: RFPercentage(1.3), borderRadius: RFPercentage(2) }}>
                            {/* Titles to the left */}
                            <View style={{ left: RFPercentage(4) }}>
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
                            {/*Button to the right */}
                            <TouchableOpacity onPress={() => setShowModel(true)} style={{ borderRadius: RFPercentage(3), backgroundColor: Colors.primary, width: RFPercentage(16), height: RFPercentage(5), position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(3), bottom: RFPercentage(2) }}>
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }}>
                                    {item.sub3Right}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Confrimation Pop Up */}

            <Modal visible={showModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "center", borderRadius: RFPercentage(1), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(25), width: "80%" }} >
                        <Text style={{ fontFamily: 'Quicksand_500Medium', textAlign: "center", width: "75%", color: "rgba(0, 0, 0, 0.5)", fontSize: RFPercentage(2.2), marginTop: RFPercentage(6) }} >
                            Are you sure you want withdraw?
                        </Text>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: RFPercentage(1), width: '100%' }}>
                            <MyAppButton
                                title="Cancel"
                                padding={RFPercentage(1.6)}
                                bold={false}
                                onPress={() => { setShowModel(false), props.navigation.navigate("RequestPayment") }}
                                backgroundColor={null}
                                borderColor={Colors.black}
                                borderWidth={RFPercentage(0.2)}
                                color={Colors.black}
                                width={"40%"}
                                borderRadius={10}
                            />
                            <View style={{ marginLeft: RFPercentage(2) }} />
                            <MyAppButton
                                title="Confirm"
                                padding={RFPercentage(1.6)}
                                bold={false}
                                onPress={() => { setShowModel(false), setSecondModel(true) }}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                width={"40%"}
                                borderRadius={10}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Popup upon confriming transaction */}
            <PopUp title="Withdrawal Request was succesful" buttonTitle="Continue" showModel={secondModel} onPress={() => { props.navigation.navigate("Payments"), setSecondModel(false) }} />
            {/* Bottom tab */}
            <BottomTab />
        </Screen>

    );
}

export default RequestPayment;