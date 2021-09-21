import React, { useState } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import Screen from "../components/Screen";

// config
import Colors from "../config/Colors";

// images
import oval1 from "../../assets/images/Illustration.png"
import oval2 from "../../assets/images/Oval.png"

function SplashScreen(props) {

    const [currentSplashIndex, setCurrentSplashIndex] = useState(0)

    const data = [
        {
            id: 0,
            image: oval1,
            title: 'Prime Spots',
            subHeading: 'Give your products great visibility on RetailSpot',
        },
        {
            id: 1,
            image: oval2,
            title: 'Great Locations',
            subHeading: 'Display on the shelves of top retail shops',
        },
        {
            id: 2,
            image: oval2,
            title: 'Offers & Discounts',
            subHeading: 'Get discounted rates on the spots you have always wanted',
        }
    ]

    const handleNext = () => {
        if (currentSplashIndex < 2) {
            setCurrentSplashIndex(currentSplashIndex + 1);
        } else {
            props.navigation.navigate("LoginScreen")
        }
    }

    return (
        <Screen style={{ backgroundColor: Colors.primary }} >
            <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

            <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", height: "90%", backgroundColor: Colors.white, borderBottomEndRadius: RFPercentage(2.5), borderBottomStartRadius: RFPercentage(2.5) }} >
                <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} style={{ position: "absolute", top: RFPercentage(4), right: RFPercentage(4) }} >
                    <Text style={{ fontSize: RFPercentage(2.5), color: Colors.grey }} >
                        Skip
                    </Text>
                </TouchableOpacity>

                <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(-5) }} >
                    <View>
                        <Image source={data[currentSplashIndex].image} />
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(3) }} >
                        <Text style={{ fontSize: RFPercentage(4), fontFamily: "Philosopher_700Bold" }} >{data[currentSplashIndex].title}</Text>
                        <Text style={{ letterSpacing: 0.8, marginTop: RFPercentage(1.5), fontSize: RFPercentage(2.2), color: Colors.grey, width: "50%", textAlign: "center" }} >{data[currentSplashIndex].subHeading}</Text>
                    </View>
                </View>

                <View style={{ position: "absolute", bottom: RFPercentage(3), flexDirection: "row" }} >
                    <View style={{ backgroundColor: currentSplashIndex === 0 ? Colors.primary : Colors.inputFieldBackgroundColor, width: currentSplashIndex === 0 ? RFPercentage(3.8) : RFPercentage(1), height: RFPercentage(1), borderRadius: RFPercentage(4) }} ></View>
                    <View style={{ marginLeft: RFPercentage(1), backgroundColor: currentSplashIndex === 1 ? Colors.primary : Colors.inputFieldBackgroundColor, width: currentSplashIndex === 1 ? RFPercentage(3.8) : RFPercentage(1), height: RFPercentage(1), borderRadius: RFPercentage(4) }} ></View>
                    <View style={{ marginLeft: RFPercentage(1), backgroundColor: currentSplashIndex === 2 ? Colors.primary : Colors.inputFieldBackgroundColor, width: currentSplashIndex === 2 ? RFPercentage(3.8) : RFPercentage(1), height: RFPercentage(1), borderRadius: RFPercentage(4) }} ></View>
                </View>
            </View>

            <TouchableOpacity onPress={() => handleNext()} style={{ height: "10%", backgroundColor: Colors.primary, justifyContent: "center", alignItems: 'center' }} >
                <Text style={{ marginBottom: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(3) }} >Next</Text>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default SplashScreen;