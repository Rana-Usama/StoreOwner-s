import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// components
import InputField from '../components/common/InputField';
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import menue from "../../assets/images/Title.png"
import Mask from "../../assets/images/Mask.png"
import pop1 from "../../assets/images/pop1.png"
import pop2 from "../../assets/images/pop2.png"

const { height } = Dimensions.get('window')

function HomeScreen(props) {

    const [sliderData, setSliderData] = useState([
        {
            id: 0,
            title: '20% Off On 3 Months Rental',
            price: "RS2832",
            image: Mask
        },
        {
            id: 1,
            title: '20% Off On 3 Months Rental',
            price: "RS2832",
            image: Mask
        },

    ])
    const [recommended, setRecommended] = useState([
        {
            id: 0,
            title: 'Spar Lekki',
            category: 'Grocery',
            price: "₦50,000",
        },

        {
            id: 1,
            title: 'Megachicken Ikeja',
            category: 'Seafood',
            price: "₦170",
        },


    ])

    const [popular, setPopular] = useState([
        {
            id: 0,
            title: 'Prince Ebeano',
            category: 'Lekki Phase 1',
            price: "₦170",
            image: pop1
        },

        {
            id: 1,
            title: 'Spar Lekki',
            category: 'Lekki Phase 1',
            price: "₦170",
            image: pop2
        },
    ])

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View style={{ marginTop: RFPercentage(1.7), marginLeft: "2%", width: "95%", justifyContent: "flex-start", alignItems: "center", flex: 1 }} >
                    <View style={{ width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }} >
                        <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} >
                            <Image source={menue} style={{ width: RFPercentage(3.8), height: RFPercentage(3.8), marginLeft: RFPercentage(1.6) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1) }} >
                        <InputField
                            secure={false}
                            placeholder={'Search for spot…'}
                            placeholderColor={Colors.grey}
                            onTouchStart={() => props.navigation.navigate('ChooseStore')}
                            width={"100%"}
                            handleFeild={() => null}
                            backgroundColor={Colors.grey1}
                            fontSize={RFPercentage(2.2)}
                            leftIconName={'search'}
                            borderWidth={0}
                        />
                    </View>

                    {/* slider */}
                    <ScrollView showsHorizontalScrollIndicator={false} style={{ maxHeight: RFPercentage(22), marginTop: RFPercentage(1.5) }} horizontal={true} >
                        {sliderData.map((item, index) => (
                            <ImageBackground key={index} borderRadius={RFPercentage(3)} style={{ margin: RFPercentage(1), justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(3), width: RFPercentage(29), height: RFPercentage(18) }} source={item.image} >
                                <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate('Store1Screen')} style={{ width: "100%", justifyContent: "center", alignItems: "center" }} >
                                    <Text style={{ marginRight: RFPercentage(-3), textAlign: "right", width: "70%", fontSize: RFPercentage(4), color: Colors.white, fontFamily: "Philosopher_700Bold" }} >
                                        {item.title}
                                    </Text>

                                    <View style={{ marginRight: RFPercentage(5), width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }} >
                                        <View style={{ borderRadius: RFPercentage(1), backgroundColor: Colors.white, padding: RFPercentage(0.5), paddingLeft: RFPercentage(2), paddingRight: RFPercentage(2) }} >
                                            <Text style={{ fontSize: RFPercentage(2.7), color: Colors.primary, fontWeight: Platform.OS === "android" ? "bold" : "700" }} >{item.price}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        ))}
                    </ScrollView>

                    {/* Recomended */}
                    <View style={{ marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >
                            Recomended
                        </Text>
                        <Text style={{ fontSize: RFPercentage(2.1), color: Colors.primary }} >
                            Show All
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ backgroundColor: "rgba(244, 244, 244, 0.3)", maxHeight: RFPercentage(15), marginTop: RFPercentage(1.5) }} horizontal={true} >
                        {recommended.map((item, index) => (
                            <View key={index} style={{
                                width: RFPercentage(33),
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.20,
                                shadowRadius: 1.41,
                                elevation: 2,
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <View style={{ borderRadius: 14, width: RFPercentage(10), height: RFPercentage(10), backgroundColor: "rgba(250, 145, 36, 0.1)" }} >
                                </View>
                                <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.5) }} >{item.title}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2), color: "#AAAAAA" }} >{item.category}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.5), color: Colors.primary }} >{item.price}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Popular */}
                    <View style={{ width: "100%", backgroundColor: "rgba(244, 244, 244, 0.3)" }} >
                        <View style={{ marginLeft: "5%", marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                            <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >
                                Most Popular
                            </Text>
                            <Text style={{ fontSize: RFPercentage(2.1), color: Colors.primary }} >
                                Show All
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ marginLeft: "5%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1.5) }} horizontal={true} >
                            {popular.map((item, index) => (
                                <View key={index} style={{
                                    width: RFPercentage(20),
                                    height: RFPercentage(28),
                                    borderRadius: 14,
                                    backgroundColor: Colors.white,
                                    margin: RFPercentage(1),
                                    padding: RFPercentage(2),
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,
                                    elevation: 2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column"
                                }} >
                                    <Image style={{ borderRadius: 14, width: RFPercentage(15), height: RFPercentage(13), }} source={item.image} />
                                    <View style={{ height: RFPercentage(9), marginTop: RFPercentage(2), justifyContent: "space-between", alignItems: "flex-start", width: "90%" }} >
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.5) }} >{item.title}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.2), color: "#AAAAAA" }} >{item.category}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.5), color: Colors.primary }} >{item.price}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Recently Added */}
                    <View style={{ marginBottom: RFPercentage(10), width: "100%", backgroundColor: "rgba(244, 244, 244, 0.3)" }} >
                        <View style={{ marginLeft: "5%", marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                            <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >
                                Recently Added
                            </Text>
                            <Text style={{ fontSize: RFPercentage(2.1), color: Colors.primary }} >
                                Show All
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ marginLeft: "5%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1.5) }} horizontal={true} >
                            {popular.map((item, index) => (
                                <View key={index} style={{
                                    width: RFPercentage(20),
                                    height: RFPercentage(28),
                                    borderRadius: 14,
                                    backgroundColor: Colors.white,
                                    margin: RFPercentage(1),
                                    padding: RFPercentage(2),
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,
                                    elevation: 2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column"
                                }} >
                                    <Image style={{ borderRadius: 14, width: RFPercentage(15), height: RFPercentage(13), }} source={item.image} />
                                    <View style={{ height: RFPercentage(9), marginTop: RFPercentage(2), justifyContent: "space-between", alignItems: "flex-start", width: "90%" }} >
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.5) }} >{item.title}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.2), color: "#AAAAAA" }} >{item.category}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(2.5), color: Colors.primary }} >{item.price}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", position: "absolute", top: (height - RFPercentage(12)), width: "99%", height: RFPercentage(8), borderRadius: RFPercentage(10), backgroundColor: Colors.primary }} >
                <TouchableOpacity onPress={() => console.log("Menue1")} >
                    <Foundation color={Colors.white} name="home" size={RFPercentage(3)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Menue2")} >
                    <FontAwesome color={Colors.white} name="bookmark-o" size={RFPercentage(3)} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: Colors.white, padding: RFPercentage(1), borderRadius: RFPercentage(4) }} onPress={() => console.log("Menue3")} >
                    <MaterialCommunityIcons color={Colors.primary} name="shopping-outline" size={RFPercentage(3)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Menue4")} >
                    <Fontisto color={Colors.white} name="bell" size={RFPercentage(3)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Menue5")} >
                    <Ionicons color={Colors.white} name="settings-outline" size={RFPercentage(3)} />
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

export default HomeScreen;