import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons"

//config
import Colors from '../config/Colors';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModel';
import MyAppButton from '../components/common/MyAppButton';
import PaymentMethodsComponent from '../components/PaymentMethodsComponent';

import pop3 from "../../assets/images/pop3.png"

const { height } = Dimensions.get('window');

function PaymentMethodScreen(props) {
    const [indicator, showIndicator] = useState(false);
    const [showModel, setShowModel] = useState(false);

    const handleLogin = () => {
        showIndicator(true);
        try {

            // API integration will come here

        } catch (error) {
            alert("Payment Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            {/* Loading Model */}
            <LoadingModal show={indicator} />
            {/* Header */}
            <View style={styles.boxWithShadow}>
                {/* BackIcon */}
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-start', marginLeft: RFPercentage(3) }}>
                    <Ionicons
                        name="arrow-back"
                        size={40}
                        color={Colors.black}
                        style={{
                            fontSize: RFPercentage(3.8),
                            fontWeight: "bold",
                        }}
                    />
                </TouchableOpacity>
                <Text style={{ color: Colors.black, fontFamily: 'Philosopher_700Bold', fontSize: RFPercentage(3) }}>
                    Payment Methods
                </Text>
            </View>
            {/* Scroll View starts */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%', marginTop: RFPercentage(2) }} >
                <PaymentMethodsComponent setShowModel={setShowModel} />
            </ScrollView>
            {/*Continue Payment Button */}
            <View style={{ position: 'absolute', bottom: RFPercentage(2), width: '100%' }}>
                <MyAppButton
                    title="Continue Payment"
                    padding={RFPercentage(2.7)}
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"90%"}
                />
            </View>

            <Modal visible={showModel} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "center", borderRadius: RFPercentage(4), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(50), width: "80%" }} >
                        <View style={{ marginTop: RFPercentage(3), justifyContent: 'center', alignItems: "center", borderRadius: RFPercentage(4), width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: Colors.primary }} >
                            <MaterialCommunityIcons name="check" size={RFPercentage(4)} color={Colors.white} />
                        </View>
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: "bold", marginTop: RFPercentage(2) }} >Thanks for your Booking</Text>
                        <Text style={{ textAlign: "center", width: "75%", color: "rgba(0, 0, 0, 0.5)", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2) }} >Your paymet has been confirmed. You can check the details for departure.</Text>

                        <View style={{
                            width: "90%",
                            height: RFPercentage(12),
                            borderRadius: 14,
                            backgroundColor: Colors.white,
                            margin: RFPercentage(1),
                            marginTop: RFPercentage(3),
                            padding: RFPercentage(2),
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }} >
                            <Image source={pop3} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                            <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >Primo Spot</Text>
                                <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >Grocery | Canned Food</Text>
                                <View style={{ flexDirection: "row", width: "80%" }} >
                                    <Text style={{ color: Colors.primary }} >₦50,000 </Text>
                                    <Text style={{ color: "#AAAAAA" }} > / month</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: RFPercentage(2), width: '100%' }}>
                            <MyAppButton
                                title="Back to Home"
                                padding={RFPercentage(1.6)}
                                bold={false}
                                onPress={() => {
                                    setShowModel(false)
                                    props.navigation.navigate("HomeScreen")
                                }}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                width={"80%"}
                                borderRadius={10}
                            />
                        </View>
                    </View>
                </View>


            </Modal>
        </Screen>
    );
}

const styles = StyleSheet.create({
    boxWithShadow: {
        width: '100%',
        backgroundColor: Colors.white,
        height: RFPercentage(17.5),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.lightestGrey,
        shadowOffset: {
            width: RFPercentage(0),
            height: RFPercentage(3)
        },
        shadowRadius: RFPercentage(1),
        shadowOpacity: 0.1
    }
})

export default PaymentMethodScreen;