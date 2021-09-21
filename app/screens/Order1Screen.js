import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions, Modal } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { RadioButton } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage"

// components
import Screen from '../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import pop2 from "../../assets/images/pop2.png"
import pop1 from "../../assets/images/pop1.png"
import pop3 from "../../assets/images/pop3.png"
import pop3Big from "../../assets/images/pop3Big.png"
import sunPer from "../../assets/images/sunPer.png"
import { add } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

function Order1Screen(props) {

    const [modalVisible, setModalVisible] = useState(false)
    const [count, setCount] = useState(0)
    const [services, setServices] = useState([
        {
            id: 0,
            title: "Merchandizing",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 1,
            title: "In-store Promotion",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 2,
            title: "Special Display",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 3,
            title: "Counter Display",
            price: "₦ 1000",
            active: "unchecked"
        },
    ])

    const [addOns, setAddOns] = useState([
        {
            id: 0,
            title: "Frontal",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 1,
            title: "Display at checkout",
            price: "₦ 1000",
            active: "checked"
        }
    ])

    const [plantain, setPlantain] = useState([
        {
            id: 0,
            title: "Merchandizing",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 1,
            title: "In-store Promotion",
            price: "₦ 1000",
            active: "checked"
        },
        {
            id: 2,
            title: "Special Display",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 3,
            title: "Counter Display",
            price: "₦ 1000",
            active: "unchecked"
        },
    ])

    const [sizes, setSizes] = useState([
        {
            id: 0,
            title: "Merchandizing",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 1,
            title: "In-store Promotion",
            price: "₦ 1000",
            active: "checked"
        }
    ])

    const [brandings, setBrandings] = useState([
        {
            id: 0,
            title: "Sell with own bag",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 1,
            title: "Allow Promotional materials",
            price: "₦ 1000",
            active: "checked"
        },
        {
            id: 2,
            title: "Dedicated Staff",
            price: "₦ 1000",
            active: "unchecked"
        },
        {
            id: 3,
            title: "Others",
            price: "₦ 1000",
            active: "unchecked"
        }
    ])

    const handleServices = (index) => {
        let temp = [...services];
        temp[index].active = temp[index].active === "unchecked" ? "checked" : "unchecked";
        setServices(temp)
    }

    const handleAddOns = (index) => {
        let temp = [...addOns];
        temp[index].active = temp[index].active === "unchecked" ? "checked" : "unchecked";
        setAddOns(temp)
    }

    const handlePlantain = (index) => {
        let temp = [...plantain];
        temp[index].active = temp[index].active === "unchecked" ? "checked" : "unchecked";
        setPlantain(temp)
    }

    const handleSizes = (index) => {
        let temp = [...sizes];
        temp[index].active = temp[index].active === "unchecked" ? "checked" : "unchecked";
        setSizes(temp)
    }

    const handleBrandings = (index) => {
        let temp = [...brandings];
        temp[index].active = temp[index].active === "unchecked" ? "checked" : "unchecked";
        setBrandings(temp)
    }

    const handleAddItem = async () => {
        try {
            setModalVisible(false)
            await AsyncStorage.setItem("cart", JSON.stringify([{ data: "" }]))
            props.navigation.navigate("Store1Screen", { data: true })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View>
                    <ImageBackground borderRadius={RFPercentage(2)} source={pop3Big} style={{ borderRadius: RFPercentage(2), alignItems: "center", width: width, height: RFPercentage(35) }} >
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }} >
                            <TouchableOpacity style={{ marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                                <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.white} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={{ zIndex: -1, justifyContent: "space-evenly", paddingTop: RFPercentage(1), paddingBottom: RFPercentage(1), marginTop: RFPercentage(-2), borderBottomLeftRadius: RFPercentage(2), borderBottomEndRadius: RFPercentage(2), backgroundColor: Colors.primary, height: RFPercentage(15) }} >
                        <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                            <Text style={{ color: Colors.white, fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.8), marginRight: RFPercentage(1) }} activeOpacity={0.5} >
                                Prime Spot
                            </Text>
                        </View>
                        <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: Colors.white }}  >
                                Guarenteed store sales for  your products
                            </Text>
                        </View>

                        <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: "#F5C03D" }}  >
                                + 10% Markup
                            </Text>
                        </View>
                    </View>


                    {/* Services */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                        <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                Services
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1) }} >
                            {
                                services.map((item, index) => (
                                    <View key={index} style={{ borderBottomWidth: 0.2, borderBottomColor: Colors.inputFieldBorder, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "95%" }} >
                                        <View style={{ marginTop: RFPercentage(0.5), marginBottom: RFPercentage(0.5), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <RadioButton
                                                value="first"
                                                label="Carto Base MAp"
                                                status={item.active}
                                                color={Colors.primary}
                                                onPress={() => handleServices(index)}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <Text>{item.price}</Text>
                                        </View>

                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>

                    {/* Add ONS */}
                    <View style={{ marginBottom: RFPercentage(10), width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                        <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                Add-ons
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1) }} >
                            {addOns.map((item, index) => (
                                <View key={index} style={{ borderBottomWidth: 0.2, borderBottomColor: Colors.inputFieldBorder, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "95%" }} >
                                    <View style={{ marginTop: RFPercentage(0.5), marginBottom: RFPercentage(0.5), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                        <RadioButton
                                            value="first"
                                            label="Carto Base MAp"
                                            status={item.active}
                                            color={Colors.primary}
                                            onPress={() => handleAddOns(index)}
                                        />
                                        <Text>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                        <Text>{item.price}</Text>
                                    </View>

                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={1} style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", position: "absolute", bottom: 0, width: "99%", height: RFPercentage(8), borderTopLeftRadius: RFPercentage(6), borderTopRightRadius: RFPercentage(6), backgroundColor: "#D8D8D8" }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8) }} >Select a Required Option First</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true}  >
                <View style={{ backgroundColor: Colors.white, height: (height - RFPercentage(5)), marginTop: RFPercentage(12) }} >
                    <View style={{ marginTop: -RFPercentage(2), justifyContent: "space-evenly", alignItems: "center", width: "100%", height: RFPercentage(9), borderRadius: RFPercentage(2), backgroundColor: Colors.primary }} >
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: Colors.white, width: RFPercentage(4), height: RFPercentage(0.6), borderRadius: RFPercentage(2) }} ></TouchableOpacity>

                        <View style={{ flexDirection: "row", width: "90%", justifyContent: 'flex-start', alignItems: "center" }} >
                            <TouchableOpacity style={{ width: "40%" }} onPress={() => setModalVisible(false)} >
                                <Entypo name="cross" size={RFPercentage(3)} color={Colors.white} />
                            </TouchableOpacity>
                            <Text style={{ width: "60%", color: Colors.white, fontSize: RFPercentage(2.8) }} >Prime Spot</Text>
                        </View>
                    </View>

                    <ScrollView>
                        {/* Plantain */}
                        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                            <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                                <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                    Plantain
                                </Text>
                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", marginTop: RFPercentage(1) }} >
                                {plantain.map((item, index) => (
                                    <View key={index} style={{ borderBottomWidth: 0.2, borderBottomColor: Colors.inputFieldBorder, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "95%" }} >
                                        <View style={{ marginTop: RFPercentage(0.5), marginBottom: RFPercentage(0.5), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <RadioButton
                                                value="first"
                                                label="Carto Base MAp"
                                                status={item.active}
                                                color={Colors.primary}
                                                onPress={() => handlePlantain(index)}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <Text>{item.price}</Text>
                                        </View>

                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Size */}
                        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                            <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                                <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                    Size
                                </Text>
                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", marginTop: RFPercentage(1) }} >
                                {sizes.map((item, index) => (
                                    <View key={index} style={{ borderBottomWidth: 0.2, borderBottomColor: Colors.inputFieldBorder, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "95%" }} >
                                        <View style={{ marginTop: RFPercentage(0.5), marginBottom: RFPercentage(0.5), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <RadioButton
                                                value="first"
                                                label="Carto Base MAp"
                                                status={item.active}
                                                color={Colors.primary}
                                                onPress={() => handleSizes(index)}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <Text>{item.price}</Text>
                                        </View>

                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Branding */}
                        <View style={{ marginBottom: RFPercentage(23), width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                            <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                                <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                    Branding
                                </Text>
                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", marginTop: RFPercentage(1) }} >
                                {brandings.map((item, index) => (
                                    <View key={index} style={{ borderBottomWidth: 0.2, borderBottomColor: Colors.inputFieldBorder, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "95%" }} >
                                        <View style={{ marginTop: RFPercentage(0.5), marginBottom: RFPercentage(0.5), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <RadioButton
                                                value="first"
                                                label="Carto Base MAp"
                                                status={item.active}
                                                color={Colors.primary}
                                                onPress={() => handleBrandings(index)}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                                            <Text>{item.price}</Text>
                                        </View>

                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </ScrollView>

                    <TouchableOpacity onPress={() => handleAddItem()} style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", position: "absolute", bottom: RFPercentage(10), right: 0, width: "50%", height: RFPercentage(12), borderTopLeftRadius: RFPercentage(2), backgroundColor: Colors.primary }} >
                        <Text style={{ fontSize: RFPercentage(2.7), color: Colors.white }} >ADD</Text>
                    </TouchableOpacity>

                    <View style={{ backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", flexDirection: "row", position: "absolute", bottom: RFPercentage(10), left: 0, width: "50%", height: RFPercentage(12) }} >
                        <View style={{ flexDirection: "row" }} >
                            <TouchableOpacity onPress={() => setCount(count === 0 ? 0 : count - 1)} >
                                <MaterialCommunityIcons name="minus" size={RFPercentage(2.8)} color={Colors.black} />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: RFPercentage(2), marginRight: RFPercentage(2), fontSize: RFPercentage(2.7), color: Colors.black }} >{count}</Text>
                            <TouchableOpacity onPress={() => setCount(count + 1)} >
                                <MaterialCommunityIcons name="plus" size={RFPercentage(2.8)} color={Colors.black} />
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

export default Order1Screen;