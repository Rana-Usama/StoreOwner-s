import React, { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from '../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';
import ImageAddingComponent from '../components/common/ImageAddingComponent';
import LoadingModal from './../components/common/LoadingModel';

//config
import Colors from '../config/Colors';

function BuyerProfileScreen(props) {

    const [bottomTab, setBottomTab] = useState(true)
    const [indicator, showIndicator] = useState(false);
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Enter your business name",
            value: "",
        },
        {
            placeholder: "Enter your location (Google Address)",
            value: "",
        },
        {
            placeholder: "Business category",
            dropdownIcon: true,
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

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "") {
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
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />
            {/* Top Image */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/buyer.png')}>
                <View style={{ backgroundColor: Colors.white, position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5) }}>
                </View>
                {/* Icon */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                    <Image source={require('../../assets/images/notiDash.png')} />
                </TouchableOpacity>
                {/*Image Heading */}
                <Text style={{ fontWeight: 'bold', color: Colors.white, bottom: RFPercentage(2.3), fontSize: RFPercentage(2.7) }}>
                    Create Profile
                </Text>
            </ImageBackground>
            {/* Central heading */}
            <Text style={{ color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.5), fontFamily: 'Montserrat_500Medium' }}>
                BUSINESS INFORMATION
            </Text>

            {/* ScrollView */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    {/* Input Fields */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(4) }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
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
                            </View>
                        ))}
                    </View>
                </KeyboardAvoidingView>
                {/* Adding photos component */}
                <ImageAddingComponent title1="Store Main Photo" title2="Upload the main photo of your store" />
                <ImageAddingComponent title1="Photo Gallery (Optional)" title2="Upload other photos for this listing" threeBoxes={true} marginTop={RFPercentage(3.8)} />
                {/* Create profile button */}
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5), marginBottom: RFPercentage(25) }}>
                    <MyAppButton
                        title="Create Profile"
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
                    <BottomTab />
                </View> :
                null
            }


        </Screen>
    );
}

export default BuyerProfileScreen;