import React, { useState } from "react";
import { Divider } from "react-native-paper";
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons"

import Colors from "../../config/Colors";

// images
import logoWhite from "../../../assets/images/logoWhite.png"
import Dashboard from "../../../assets/images/dashboard2.png"
import shelves from "../../../assets/images/shelves.png"
import bookings from "../../../assets/images/bookings.png"
import payments from "../../../assets/images/payments.png"
import settings from "../../../assets/images/settings.png"


function AppDrawer({ navigation }) {
    const items = [
        {
            id: 0,
            label: "Dashboard",
            image: Dashboard,
            path: "DashboardScreen"
        },
        {
            id: 1,
            label: "Shelves",
            image: shelves,
            path: "MyShelvesScreen"
        },
        {
            id: 2,
            label: "Bookings",
            image: bookings,
            path: "MyShelvesBookedScreen"
        },
        {
            id: 3,
            label: "Payments",
            image: payments,
            path: "Screen name to navigate"
        },
        {
            id: 4,
            label: "Settings",
            image: settings,
            path: "Screen name to navigate"
        },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }} >
            <View style={{ justifyContent: "center", alignItems: 'center', width: "90%", height: RFPercentage(15), flexDirection: 'row', padding: RFPercentage(2.4), marginTop: RFPercentage(3) }} >
                <View style={{ width: "45%", justifyContent: 'center', alignItems: 'center' }} >
                    <Image height={RFPercentage(10)} width={RFPercentage(12)} style={{ width: RFPercentage(13), height: RFPercentage(10) }} source={logoWhite} />
                </View>
            </View>

            {/* items with devider */}
            {items.map((item, index) => (
                <View key={index} style={{ marginTop: RFPercentage(3), justifyContent: 'center', alignItems: "center" }} >
                    <View style={{ alignItems: "center", width: "80%" }} >
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                            navigation.navigate(item.path)
                        }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Image source={item.image} style={{ width: RFPercentage(2.2), height: RFPercentage(2.2) }} />
                            <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.white, fontSize: RFPercentage(2.4), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >{item.label}</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ marginTop: RFPercentage(2.8), backgroundColor: Colors.white, width: "50%", alignSelf: "center" }} />
                </View>
            ))}

            {/* Adamu Ciroma */}
            <View style={{ marginTop: RFPercentage(10), justifyContent: 'center', alignItems: "center" }} >
                <View style={{ alignItems: "center", width: "80%" }} >
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        navigation.navigate("scree name")
                    }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                        <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.white, fontSize: RFPercentage(2.4), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >Adamu Ciroma</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* sing-out */}
            <View style={{ marginTop: RFPercentage(10), justifyContent: 'center', alignItems: "center" }} >
                <View style={{ alignItems: "center", width: "80%" }} >
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        navigation.navigate("scree name")
                    }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                        <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.white, fontSize: RFPercentage(2.4), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >Sign-out</Text>
                        <AntDesign style={{ marginLeft: RFPercentage(1) }} name="arrowright" color={Colors.white} size={RFPercentage(2.6)} />
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    );
}


export default AppDrawer;