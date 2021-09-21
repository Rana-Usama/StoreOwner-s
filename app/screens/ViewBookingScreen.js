import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import NavTitlesAndIcon from '../components/common/NavTitlesAndIcon';
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';
import LoadingModal from '../components/common/LoadingModel';


//config
import Colors from '../config/Colors';

function ViewBookingScreen(props) {
    const [indicator, showIndicator] = useState(false);


    const handleLogin = () => {
        showIndicator(true);

        try {
            // API integration will come here

        } catch (error) {
            alert("Can't Proceed");
        }

        showIndicator(false);
    };


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <LoadingModal show={indicator} />
            {/* Nav Icon and titles */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <NavTitlesAndIcon mainTitle="View Booking" icon={true} />
            </View>
            {/* Image and details */}
            <View style={{ flexDirection: 'row', marginTop: RFPercentage(10) }}>
                <Image source={require('../../assets/images/build.png')} />
                <View style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(-1) }}>
                    <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.6) }}>
                        #30480
                    </Text>
                    <Text style={{ marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2.2) }}>
                        Prime Shelf
                    </Text>
                    <Text style={{ marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2.2) }}>
                        ₦50,000
                    </Text>
                    <View style={{ borderRadius: RFPercentage(1), marginTop: RFPercentage(1), height: RFPercentage(4), backgroundColor: '#FFA40B33', alignItems: 'flex-start', justifyContent: 'center', color: '#82867D', fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2.2) }}>
                        <Text style={{ marginLeft: RFPercentage(0.5), color: '#82867D', fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2.2) }} >Occupied</Text>
                    </View>
                    <Text style={{ marginTop: RFPercentage(1), color: '#FFA40B', fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(2.2) }}>
                        20 Days to expire
                    </Text>
                </View>
            </View>
            {/* Sub Details */}
            <View style={{ width: '65%', alignItems: 'flex-start', marginTop: RFPercentage(3) }}>
                <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.3) }}>
                    Customer Information
                </Text>
                <Text style={{ marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(1.8) }}>
                    Heldo Foods Limted
                </Text>
            </View>
            <View style={{ width: '65%', alignItems: 'flex-start', marginTop: RFPercentage(3) }}>
                <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.3) }}>
                    Customer Information
                </Text>
                <Text style={{ marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(1.8) }}>
                    Heldo Foods Limted
                </Text>
            </View>
            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", justifyContent: 'center', marginTop: RFPercentage(10) }}>
                <MyAppButton
                    title="Complete Transaction"
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={"#FD6721"}
                    color={Colors.white}
                    width={"90%"}
                />
            </View>
        </Screen>
    );
}

export default ViewBookingScreen;