import React, { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import InputField from '../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';
import LoadingModal from '../components/common/LoadingModel';

//config
import Colors from '../config/Colors';
import { TextInput } from 'react-native-gesture-handler';

function CreateShelfStep1(props) {

    const [bottomTab, setBottomTab] = useState(true);
    const [indicator, showIndicator] = useState(false);


    const [inputField, SetInputField] = useState([
        {
            placeholder: "Shelf Title",
            value: "",
        },
        {
            placeholder: "Description",
            value: "",
        },
        {
            placeholder: "Product Category",
            dropdownIcon: true,
            value: "",
        },
        {
            placeholder: "Select Unit",
            dropdownIcon: true,
            title: 'Enter dimensions of shelf',
            value: "",
        },
        {
            placeholder: "Select Rental Period",
            dropdownIcon: true,
            value: "",
        },
        {
            placeholder: "Select Rental Period",
            dropdownIcon: true,
            value: "",
        },
        {
            placeholder: "Select Available Space",
            dropdownIcon: true,
            value: "",
        },
        {
            placeholder: "Enter Space Price",
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

        if (tempfeilds[0].value === "" || tempfeilds[2].value === "") {
            alert("Please fill all the feilds !");
            showIndicator(false);
            return true;
        }
        props.navigation.navigate("CreateShelfStep2")
        // setModel(true);

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
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
                <LoadingModal show={indicator} />
                {/* Top Image */}
                <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/buyer.png')}>
                    <View style={{ backgroundColor: Colors.white, position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5) }}>
                    </View>
                    {/* Icon */}
                    <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                        <Image source={require('../../assets/images/notiDash.png')} />
                    </TouchableOpacity>
                    {/*Image Heading */}
                    <Text style={{ fontWeight: 'bold', color: Colors.white, bottom: RFPercentage(2.3), fontSize: RFPercentage(2.7) }}>
                        Create Spot
                    </Text>
                </ImageBackground>
                {/* Central heading */}
                <Text style={{ color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.5), fontFamily: 'Montserrat_500Medium' }}>
                    SPOT INFORMATION
                </Text>

                {/* ScrollView */}
                <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                    {/* Input Fields */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(4) }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                <Text style={{ fontSize: RFPercentage(2.2), marginBottom: i === 3 ? RFPercentage(2) : RFPercentage(-2), color: '#82867D', fontFamily: 'Quicksand_700Bold', marginLeft: RFPercentage(2) }}>{item.title}</Text>
                                {i === 4 ?
                                    <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ borderRadius: RFPercentage(2), alignItems: 'center', width: '30%', flexDirection: 'row', backgroundColor: '#F7F7F7', height: RFPercentage(8) }}>
                                            <TextInput placeholder="width" style={{ marginLeft: RFPercentage(2) }} />
                                            <Entypo style={{ position: 'absolute', right: RFPercentage(1), fontSize: RFPercentage(3) }} name="select-arrows" color={Colors.circle} />
                                        </View>
                                        <View style={{ marginLeft: RFPercentage(2), borderRadius: RFPercentage(2), alignItems: 'center', width: '30%', flexDirection: 'row', backgroundColor: '#F7F7F7', height: RFPercentage(8) }}>
                                            <TextInput placeholder="Length" style={{ marginLeft: RFPercentage(2) }} />
                                            <Entypo style={{ position: 'absolute', right: RFPercentage(1), fontSize: RFPercentage(3) }} name="select-arrows" color={Colors.circle} />
                                        </View>
                                        <View style={{ marginLeft: RFPercentage(2), borderRadius: RFPercentage(2), alignItems: 'center', width: '30%', flexDirection: 'row', backgroundColor: '#F7F7F7', height: RFPercentage(8) }}>
                                            <TextInput placeholder="Height" style={{ marginLeft: RFPercentage(2) }} />
                                            <Entypo style={{ position: 'absolute', right: RFPercentage(1), fontSize: RFPercentage(3) }} name="select-arrows" color={Colors.circle} />
                                        </View>
                                    </View> :
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.background}
                                        borderColor={Colors.background}
                                        height={RFPercentage(7.3)}
                                        fontSize={RFPercentage(2)}
                                        onTouchStart={() => setBottomTab(false)}
                                        onTouchEnd={() => setBottomTab(true)}
                                        placeholderColor={'#82867D'}
                                        fontFamily={'Quicksand_400Regular'}
                                        dropdownIcon={item.dropdownIcon}
                                        borderRadius={RFPercentage(20)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"90%"}
                                    />
                                }
                            </View>
                        ))}
                    </View>
                    {/* Create profile button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2), marginBottom: RFPercentage(18) }}>
                        <MyAppButton
                            title="Continue"
                            bold={false}
                            onPress={() => handleLogin()}
                            backgroundColor={"#FD6721"}
                            color={Colors.white}
                            width={"90%"}
                        />
                    </View>
                </ScrollView>
                {bottomTab ?
                    <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                        {/* Bottom Tab */}
                        <BottomTab onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
                    </View> :
                    null
                }
                {/* <PopUp title="Your paymet has been confirmed. You can check the details for departure. " buttonTitle="Continue" showModel={model} onPress={() => { props.navigation.navigate("MyStoresScreen"), setModel(false) }} /> */}
            </Screen>
        </KeyboardAvoidingView>
    );
}

export default CreateShelfStep1;