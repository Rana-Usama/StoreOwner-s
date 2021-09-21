import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions, Modal } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"

// components
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import pop2 from "../../assets/images/pop2.png"
import pop1 from "../../assets/images/pop1.png"
import pop3 from "../../assets/images/pop3.png"
import sunPer from "../../assets/images/sunPer.png"
import MyAppButton from '../components/common/MyAppButton';
import InputField from '../components/common/InputField';

const { width, height } = Dimensions.get('window');

function Store1Screen(props) {

    const [showCartButton, setShowCartButton] = useState(false)
    const [showSunModel, setShowSunModel] = useState(false)
    const [showCartDetails, setShowCartDetails] = useState(false)
    const [coupen, setCoupen] = useState('')
    const [popular, setPopular] = useState([
        {
            id: 0,
            title: 'Prime Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
        },
        {
            id: 1,
            title: 'Ebeano  Highlight',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
        },
        {
            id: 2,
            title: 'Ebeano  Highlight',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
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

    const getCart = async () => {
        try {
            let res = await AsyncStorage.getItem("cart");
            console.log(res)
            res = JSON.parse(res);
            if (res.length > 0) {
                setShowCartButton(true)
            } else {
                setShowCartButton(false)
            }
        } catch (error) {

        }
    }

    const removeItem = async () => {
        try {
            await AsyncStorage.removeItem("cart");
        } catch (error) {

        }
    }

    useEffect(() => {
        // getCart()

        try {
            if (props.route.params.data) {
                setShowCartButton(true)
            } else {
                setShowCartButton(false);
            }

        } catch (error) {

        }
    }, [props.route.params])

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View>
                    <ImageBackground source={pop2} style={{ alignItems: "center", width: width, height: RFPercentage(18) }} >
                        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.25)" }} ></View>
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }} >
                            <TouchableOpacity style={{ marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                                <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.white} />
                            </TouchableOpacity>

                            <View style={{ flexDirection: "row" }} >
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{ marginRight: RFPercentage(2.3) }} activeOpacity={0.5} >
                                    <FontAwesome name="share-square-o" size={RFPercentage(3)} color={Colors.white} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{}} activeOpacity={0.5} >
                                    <MaterialCommunityIcons name="heart-outline" size={RFPercentage(3)} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(3.8), marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                            Ebeano Lekki
                        </Text>
                        <View style={{ flexDirection: "row" }} >
                            <Text onPress={() => console.log("Recording mic")} style={{ marginRight: RFPercentage(2.3) }} activeOpacity={0.5} >
                                0.1 Km
                            </Text>
                            <View style={{ flexDirection: "row" }} >
                                <MaterialCommunityIcons name="star" size={RFPercentage(2)} color={Colors.grey} />
                                <Text style={{ color: Colors.grey }} >4.6</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: "#50555C" }}  >
                            Food | Home | Health | Beauty
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <View style={{ flexDirection: "row" }} >
                            <MaterialCommunityIcons name="location-enter" size={RFPercentage(2)} color={Colors.grey} />
                            <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2), color: "#AAAAAA" }}  >
                                14b Muritala Eletu Way, Lekki
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => setShowSunModel(!showSunModel)} style={{ marginRight: RFPercentage(2) }} >
                            <Image source={sunPer} style={{ width: RFPercentage(3), height: RFPercentage(3) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: "#AAAAAA" }}  >
                            8am - 10pm
                        </Text>
                    </View>


                    {/* Hot Spots */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                        <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                Hot Spots
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1) }} horizontal={true} >
                            {popular.map((item, index) => (
                                <View key={index} style={{
                                    width: RFPercentage(20),
                                    height: RFPercentage(28),
                                    borderRadius: 14,
                                    backgroundColor: Colors.white,
                                    margin: RFPercentage(0.6),
                                    padding: RFPercentage(2),
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column"
                                }} >
                                    <Image style={{ borderRadius: 20, width: RFPercentage(20), height: RFPercentage(15), }} source={item.image} />
                                    <View style={{ height: RFPercentage(9), marginTop: RFPercentage(2), alignItems: "flex-start", width: "100%" }} >
                                        <Text numberOfLines={1} style={{ fontFamily: "Philosopher_700Bold", textAlign: "left", fontSize: RFPercentage(2.4) }} >{item.title}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: "#AAAAAA" }} >{item.category}</Text>
                                        <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "space-between", width: "100%" }} >
                                            <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: Colors.primary }} >{item.price}</Text>
                                            <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: "#F5C03D" }} >{item.percentage}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Spots */}
                    <View style={{ marginLeft: "5%", marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ marginLeft: RFPercentage(2), color: Colors.black, fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                            Spots
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(1.5) }}>
                        {recommended.map((item, index) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate("Order1Screen")} activeOpacity={0.9} key={index} style={{
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
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            {
                showCartButton ?
                    <TouchableOpacity onPress={() => setShowCartDetails(true)} activeOpacity={1} style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", position: "absolute", bottom: RFPercentage(2), width: "99%", height: RFPercentage(8), borderRadius: RFPercentage(10), backgroundColor: Colors.primary }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4) }} >1 Item</Text>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4) }} >CART</Text>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4) }} >₦ 4,500</Text>
                    </TouchableOpacity>
                    : null
            }

            <Modal visible={showCartDetails} transparent={true}  >
                <View style={{ width: "100%", justifyContent: "flex-start", alignItems: "center", borderTopLeftRadius: RFPercentage(7), borderTopRightRadius: RFPercentage(7), marginTop: (height - RFPercentage(30)), backgroundColor: Colors.primary, height: RFPercentage(35) }} >
                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(3) }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Ionicons name="basket-sharp" size={RFPercentage(3)} color={Colors.white} />
                            <Text style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1), color: Colors.white }} >Cart</Text>
                            <Text style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(0.5), color: Colors.white }} >(1 item)</Text>
                        </View>

                        <TouchableOpacity onPress={() => setShowCartDetails(false)} >
                            <MaterialCommunityIcons name="chevron-down" size={RFPercentage(3)} color={Colors.white} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1), color: Colors.white }} >x1 Prime Spot</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(0.5) }}>
                        <Text style={{ fontSize: RFPercentage(2), fontFamily: "Quicksand_400Regular", marginLeft: RFPercentage(1), color: Colors.white }} >x1 In-store Promotion</Text>
                    </View>

                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(3) }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontFamily: "Quicksand_400Regular", fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1), color: Colors.white }} >Total</Text>
                            <Text style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(2.5), color: Colors.white }} >₦ 55,500</Text>
                        </View>

                        <MyAppButton
                            title="BOOK NOW"
                            backgroundColor={Colors.white}
                            color={Colors.black}
                            onPress={() => {
                                setShowCartDetails(false)
                                props.navigation.navigate("CartDetails2")
                            }}
                            width={RFPercentage(19)}
                            padding={RFPercentage(1.5)}
                        />
                    </View>
                </View>
            </Modal>

            {/* s0n model */}
            <Modal visible={showSunModel} transparent={true}  >
                <View style={{ width: "100%", justifyContent: "flex-start", alignItems: "center", borderTopLeftRadius: RFPercentage(7), borderTopRightRadius: RFPercentage(7), marginTop: (height - RFPercentage(25)), backgroundColor: Colors.white, height: RFPercentage(25) }} >
                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(3) }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                        </View>
                        <TouchableOpacity onPress={() => setShowSunModel(false)} >
                            <MaterialCommunityIcons name="chevron-down" size={RFPercentage(3)} color={"#50555C"} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1), color: "#50555C" }} >Promotion: First time - Discount 30%</Text>
                    </View>


                    <View style={{ justifyContent: "space-between", width: "80%", flexDirection: "row", marginTop: RFPercentage(1) }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                            <Text style={{ marginRight: RFPercentage(2), fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1), color: "#50555C" }} >Coupon code:</Text>
                            <InputField
                                textCenter={"center"}
                                placeholder={"RSPOT"}
                                handleFeild={(text) => setCoupen(text)}
                                value={coupen}
                                width={"40%"}
                                height={RFPercentage(4.5)}
                                borderRadius={RFPercentage(1)}
                                placeholderColor={"white"}
                                color={"white"}
                                backgroundColor={"#EB1700"}
                            />
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(0.5), width: RFPercentage(4), height: RFPercentage(4), backgroundColor: "#EB1700" }} >
                                <MaterialCommunityIcons name="content-copy" size={RFPercentage(2.5)} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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

export default Store1Screen;