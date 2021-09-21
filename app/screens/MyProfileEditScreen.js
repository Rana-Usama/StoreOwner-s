import React, { useState } from 'react';
import Screen from '../components/Screen';
import { ImageBackground, View, TouchableOpacity, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import InputField from '../components/common/InputField';
import Colors from '../config/Colors';
import BottomTab from '../components/common/BottomTab';

function MyProfileEditScreen(props) {

    const [bottomTab, setBottomTab] = useState(true)
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            value: "",
        },
        {
            placeholder: "Email",
            value: "",
        },
        {
            placeholder: "Mobile  Number",
            value: "",
        },
        {
            placeholder: "Phone  Number",
            value: "",
        },
        {
            placeholder: "Old Password",
            secure: true,
            value: "",
        },
        {
            placeholder: "New Password",
            secure: true,
            value: "",
        },
        {
            placeholder: "Retype New Password",
            secure: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#FAFAFA" }}>
                <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(30) }} source={require('../../assets/images/whitepic.png')}>
                    <View style={{ backgroundColor: '#FAFAFA', position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(15), borderTopRightRadius: RFPercentage(15) }}>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(5.2), left: RFPercentage(4) }}>
                        <Image source={require('../../assets/images/profileicon.png')} />
                    </TouchableOpacity>
                </ImageBackground>
                {/* profile pic */}
                <Image style={{ marginTop: RFPercentage(-20) }} source={require('../../assets/images/man.png')} />
                <TouchableOpacity>
                    {/* reverse icon */}
                    <Image style={{ marginLeft: RFPercentage(17), marginTop: RFPercentage(-3) }} source={require('../../assets/images/reverse.png')} />
                </TouchableOpacity>
                {/* Input Fields */}
                <ScrollView style={{ backgroundColor: "#FAFAFA", flex: 1, width: '100%' }} >

                    {/* Input Fields */}
                    <View style={{ marginBottom: RFPercentage(20), justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(4) }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i === 4 ? RFPercentage(10) : RFPercentage(2) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={Colors.background}
                                    borderColor={Colors.background}
                                    secure={item.secure}
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
                </ScrollView>
                {bottomTab ?
                    <View style={{ marginBottom: RFPercentage(1.5), alignItems: 'center', flexDirection: 'row', width: '100%', height: RFPercentage(10.8), position: 'absolute', bottom: 0, borderRadius: RFPercentage(30), backgroundColor: '#F2560E' }}>
                        <TouchableOpacity>
                            <Image style={{ marginLeft: RFPercentage(5) }} source={require('../../assets/images/town.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ marginLeft: RFPercentage(7) }} source={require('../../assets/images/book.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ marginLeft: RFPercentage(7) }} source={require('../../assets/images/notification.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: RFPercentage(15), height: RFPercentage(5), marginLeft: RFPercentage(7) }} source={require('../../assets/images/profile.png')} />
                        </TouchableOpacity>
                    </View> :
                    null
                }

            </Screen>
        </KeyboardAvoidingView>
    );
}

export default MyProfileEditScreen;