import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// components
import Screen from '../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import pop2 from "../../assets/images/pop2.png"
import pop1 from "../../assets/images/pop1.png"
import pop3 from "../../assets/images/pop3.png"
import sunPer from "../../assets/images/sunPer.png"
import MyAppButton from '../components/common/MyAppButton';

const { width } = Dimensions.get('window');

function Store2Screen(props) {

    const [buttons, setButtons] = useState([
        {
            id: 0,
            title: 'Fire Spot',
            backgroundColor: Colors.primary,
            color: Colors.white
        },
        {
            id: 1,
            title: 'Special Spot',
            backgroundColor: Colors.inputFieldBackgroundColor,
            color: Colors.black
        },
        {
            id: 2,
            title: 'Fire Spot',
            backgroundColor: Colors.inputFieldBackgroundColor,
            color: Colors.black
        },
    ])
    const [popular, setPopular] = useState([
        {
            id: 0,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 1,
            title: 'Special Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 2,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
    ])

    const [recommended, setRecommended] = useState([
        {
            id: 0,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 1,
            title: 'Special Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 2,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
    ])

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%", backgroundColor: Colors.white }} >
                <View style={{ width: "100%" }}>
                    <View style={{ marginTop: RFPercentage(2), alignItems: "center", width: width }} >
                        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }} ></View>
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }} >
                            <TouchableOpacity style={{ marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                                <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={"#50555C"} />
                            </TouchableOpacity>

                            <Text style={{ color: "#50555C", fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.8), marginLeft: RFPercentage(3) }} >Ebeano, Lekki</Text>

                            <View style={{ flexDirection: "row" }} >
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{ marginRight: RFPercentage(2.3) }} activeOpacity={0.5} >
                                    <FontAwesome name="share-square-o" size={RFPercentage(3)} color={"#50555C"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{}} activeOpacity={0.5} >
                                    <MaterialCommunityIcons name="heart-outline" size={RFPercentage(3)} color={"#50555C"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: "100%", marginTop: RFPercentage(2.5) }}>
                        {
                            buttons.map((item, index) => (
                                <View key={index} style={{ marginLeft: RFPercentage(index === 0 ? 2 : 1) }} >
                                    <MyAppButton
                                        title={item.title}
                                        onPress={() => console.log("Spots")}
                                        backgroundColor={item.backgroundColor}
                                        color={item.color}
                                        bold={false}
                                        width={RFPercentage(18)}
                                        padding={RFPercentage(1.7)}
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>

                    {/* Spots */}
                    <View style={{ marginLeft: "5%", marginTop: RFPercentage(3), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ marginLeft: RFPercentage(2), color: Colors.black, fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                            Spots
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(1.5) }}>
                        {recommended.map((item, index) => (
                            <View key={index} style={{
                                width: "90%",
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <Image source={item.image} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                                <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >{item.title}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >{item.category}</Text>
                                    <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                        <Text style={{ color: Colors.primary }} >{item.price}</Text>
                                        <Text style={{ color: "#F5C03D", marginLeft: RFPercentage(2) }} >{item.percentage}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>


                    {/* popular */}
                    <View style={{ marginLeft: "5%", marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ marginLeft: RFPercentage(2), color: Colors.black, fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                            Popular
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(1.5) }}>
                        {popular.map((item, index) => (
                            <View key={index} style={{
                                width: "90%",
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <Image source={item.image} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                                <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >{item.title}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >{item.category}</Text>
                                    <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                        <Text style={{ color: Colors.primary }} >{item.price}</Text>
                                        <Text style={{ color: "#F5C03D", marginLeft: RFPercentage(2) }} >{item.percentage}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>


                </View>
            </ScrollView>

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

export default Store2Screen;