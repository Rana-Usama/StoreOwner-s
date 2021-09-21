import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from '../components/common/InputField';
import MyAppButton from '../components/common/MyAppButton';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from '../components/common/BottomTab';
import LoadingModal from './../components/common/LoadingModel';

//config
import Colors from '../config/Colors';
import { Dimensions } from 'react-native';
import SmallInputField from '../components/common/SmallInputField';


const { width } = Dimensions.get('window')

function ViewShelfEditScreen(props) {

    const [bottomTab, setBottomTab] = useState(true)
    const [indicator, showIndicator] = useState(false);
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Prime spot for your products",
            title: 'Description',
            editIcon: true,
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Width",
            title: 'Dimension',
            editIcon: true,
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Healthy Foods",
            title: 'Category',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "Healthy Foods",
            title: 'Services',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "Weekly, Monthly, Quarterly",
            title: 'Rental Period',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "₦50,000",
            title: 'Price',
            editIcon: true,
            // secure: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "" || tempfeilds[4].value === "" || tempfeilds[5].value === "") {
            alert("Please fill all the feilds !");
            showIndicator(false);
            return true;
        }

        try {

            // API integration will come here

        } catch (error) {
            alert("Login Error");
        }

        showIndicator(false);
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >

            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
                <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <LoadingModal show={indicator} />
                        {/* Nav Icon and titles */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <NavTitlesAndIcon mainTitle="View Shelf" sideTitle="ADD" icon={true} />
                        </View>
                        {/* Image Title */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Text style={{ fontFamily: 'Quicksand_400Regular', marginTop: RFPercentage(7), color: "#313942", fontSize: RFPercentage(2.3) }}>
                                Prime Shelf
                            </Text>
                        </View>
                        {/* Main Image */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                            <ImageBackground style={{ marginTop: RFPercentage(4), width: width - 50, height: RFPercentage(40) }} source={require('../../assets/images/completeBuilding.png')}>
                                {/* Edit Icon */}
                                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                                    <MaterialIcons name="edit" size={RFPercentage(2.5)} color={Colors.editIcon} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>

                        {/* white container images */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'space-evenly', height: RFPercentage(16), marginTop: RFPercentage(2.4), borderRadius: RFPercentage(2) }}>
                                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(1.6), top: RFPercentage(0.4) }}>
                                    <MaterialIcons name="edit" size={RFPercentage(1.8)} color={Colors.editIcon} />
                                </TouchableOpacity>
                                <Image style={{ width: RFPercentage(13), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                                <Image style={{ marginLeft: RFPercentage(0.5), width: RFPercentage(13), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                                <Image style={{ marginLeft: RFPercentage(0.5), width: RFPercentage(13), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                            </View>
                        </View>

                        {/* input fields */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <View style={{ width: '100%', alignItems: "center", marginTop: RFPercentage(4) }}>



                                {inputField.map((item, i) => (

                                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                        <Text style={{ fontFamily: 'Quicksand_500Medium', color: "#82867D", fontWeight: 'bold', fontSize: RFPercentage(2.5), bottom: RFPercentage(0.5) }}>{item.title}</Text>
                                        {i === 1 ? <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row", width: "86%", height: RFPercentage(6.8), backgroundColor: Colors.white, borderRadius: RFPercentage(1) }}>
                                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                                                <Text style={{ color: Colors.circle, fontSize: RFPercentage(2), fontFamily: 'Quicksand_400Regular' }}>
                                                    Width
                                                </Text>
                                                <SmallInputField
                                                    handleFeild={(text) => handleChange(text, i)}
                                                    onTouchStart={() => setBottomTab(false)}
                                                    onTouchEnd={() => setBottomTab(true)} />
                                                <Text style={{ color: Colors.circle, fontSize: RFPercentage(2), fontFamily: 'Quicksand_400Regular', marginLeft: RFPercentage(2) }}>
                                                    Length
                                                </Text>
                                                <SmallInputField
                                                    handleFeild={(text) => handleChange(text, i)}
                                                    onTouchStart={() => setBottomTab(false)}
                                                    onTouchEnd={() => setBottomTab(true)} />
                                                <Text style={{ color: Colors.circle, fontSize: RFPercentage(2), fontFamily: 'Quicksand_400Regular', marginLeft: RFPercentage(2) }}>
                                                    Height
                                                </Text>
                                                <SmallInputField
                                                    handleFeild={(text) => handleChange(text, i)}
                                                    onTouchStart={() => setBottomTab(false)}
                                                    onTouchEnd={() => setBottomTab(true)} />
                                            </View>
                                        </View> : <InputField
                                            placeholder={item.placeholder}
                                            secure={item.secure}
                                            keyboardType={item.type}
                                            backgroundColor={Colors.white}
                                            placeholderColor={Colors.palceholderColor}
                                            onTouchStart={() => setBottomTab(false)}
                                            onTouchEnd={() => setBottomTab(true)}
                                            borderColor={Colors.white}
                                            borderRadius={RFPercentage(1)}
                                            fontFamily={"Quicksand_400Regular"}
                                            fontSize={RFPercentage(2)}
                                            editIcon={item.editIcon}
                                            handleFeild={(text) => handleChange(text, i)}
                                            value={item.value}
                                            width={"90%"}
                                        />
                                        }

                                    </View>
                                ))}
                            </View>

                        </View>

                        {/* Setup Spot Button */}
                        <View style={{ width: "100%", alignItems: "center", top: RFPercentage(3), marginBottom: RFPercentage(20) }}>
                            <MyAppButton
                                title="Setup Spot"
                                padding={RFPercentage(2.7)}
                                bold={false}
                                onPress={() => handleLogin()}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                width={"90%"}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Screen>
            {bottomTab ?
                <BottomTab onPressFirstIcon={() => props.navigation.navigate("BuyerProfileScreen")} onPressNotification={() => props.navigation.navigate("NotificationScreen")} /> :
                null
            }

        </KeyboardAvoidingView>

    );
}

export default ViewShelfEditScreen;