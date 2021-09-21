import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// components
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

const { height } = Dimensions.get('window')

function CartDetails2(props) {

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View style={{ marginTop: RFPercentage(1.7), marginLeft: "2%", width: "95%", justifyContent: "space-between", alignItems: "center", flex: 1 }} >
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity style={{ width: "33%" }} onPress={() => props.navigation.navigate('Store1Screen')} activeOpacity={0.5} >
                            <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.black} />
                        </TouchableOpacity>

                        <Text style={{ width: "60%", fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.8) }} >Ebeano, Lekki</Text>
                    </View>

                    <ScrollView style={{ width: "100%", backgroundColor: "rgba(244, 244, 244, 0.3)", marginTop: RFPercentage(1.5) }}  >
                        <View style={{ width: "100%", justifyContent: 'center', alignItems: "center" }}  >
                            <TouchableOpacity onPress={() => props.navigation.navigate("CalendarScreen")} activeOpacity={0.8} style={{
                                width: "80%",
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <View style={{ marginLeft: RFPercentage(2), width: "85%", height: "100%", justifyContent: "space-around" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.1), color: "#82867D" }} >Start Date:</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.3), color: "#50555C" }} >22/11/2021</Text>
                                </View>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="pencil" size={RFPercentage(2.5)} color="#F5C03D" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "100%", justifyContent: 'center', alignItems: "center" }}  >
                            <TouchableOpacity onPress={() => props.navigation.navigate("CalendarScreen")} activeOpacity={0.8} style={{
                                width: "80%",
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <View style={{ marginLeft: RFPercentage(2), width: "85%", height: "100%", justifyContent: "space-around" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.1), color: "#82867D" }} >Start Date:</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.3), color: "#50555C" }} >22/11/2021</Text>
                                </View>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="pencil" size={RFPercentage(2.5)} color="#F5C03D" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "column", borderTopRightRadius: RFPercentage(5), borderTopLeftRadius: RFPercentage(5), backgroundColor: Colors.white, marginTop: RFPercentage(2), width: "100%", justifyContent: 'center', alignItems: "center" }}  >
                            <View style={{ width: "80%", marginTop: RFPercentage(3) }} >
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.1), color: "#82867D" }} >Cart</Text>
                            </View>
                            <View style={{ marginTop: RFPercentage(1.5), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5), color: "#313942" }} >x1 Prime Spot</Text>
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.5), color: "#313942" }} >₦ 50,000</Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(1.5), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2), color: "#82867D" }} >x1 In-store Promotion</Text>
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2), color: "#82867D" }} >₦ 5000</Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(3), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2), color: "#82867D" }} >Subtotal</Text>
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2), color: "#82867D" }} >₦ 55,000</Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(7), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.3), color: "#074482" }} >+ Add a Promo</Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(3), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.3), color: "#074482" }} >+ Add Note to RetailSpot</Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(12), flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.2), color: "#313942" }} >Total</Text>
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.4), color: "#313942" }} >₦ 55,600</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", position: "absolute", top: (height - RFPercentage(12)), width: "99%", height: RFPercentage(8), borderRadius: RFPercentage(10), backgroundColor: Colors.primary }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("PaymentMethodScreen")} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8) }} >MAKE PAYMENT</Text>
                </TouchableOpacity>
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center"
    }
})

export default CartDetails2;