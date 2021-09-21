import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import InputField from '../components/common/InputField';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModel';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

// const { height } = Dimensions.get("window");

function ProfileScreen(props) {
    const [indicator, showIndicator] = useState(false);
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Type your number",
            title: 'Phone',
            value: "",
        },
        {
            placeholder: "Type your email",
            title: 'Email',
            redBorder: true,
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Password",
            title: 'Password',
            secure: true,
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
            {/* Header */}
            <View elevation={20} style={styles.boxWithShadow}>
                <Text style={{ color: Colors.black, fontFamily: 'Philosopher_700Bold', fontSize: RFPercentage(3.2) }}>
                    Profile
                </Text>
            </View>

            {/* ImageBox */}
            <ScrollView style={{ backgroundColor: Colors.white, marginTop: RFPercentage(5), flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity style={{ marginTop: RFPercentage(2), backgroundColor: "#E2E8F0", width: RFPercentage(20), height: RFPercentage(20), borderRadius: RFPercentage(50) }}>
                        <Image style={{ position: 'absolute', bottom: 0, right: RFPercentage(2.5) }} source={require('../../assets/images/plus.png')} />
                    </TouchableOpacity>
                    {/* Name */}
                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(3) }}>
                        <Text style={{ marginLeft: RFPercentage(5.5), fontSize: RFPercentage(2.52), fontFamily: 'Philosopher_700Bold' }}>
                            John Doe Ike
                        </Text>
                        <TouchableOpacity>
                            <Image style={{ marginLeft: RFPercentage(2) }} source={require('../../assets/images/tick.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* Input Fields */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(i === 0 ? 5 : 2) }} >
                            <Text style={{ color: "#708097", fontSize: RFPercentage(2.5), bottom: RFPercentage(0.5) }}>{item.title}</Text>
                            <InputField
                                placeholder={item.placeholder}
                                secure={item.secure}
                                keyboardType={item.type}
                                backgroundColor={Colors.white}
                                borderColor={Colors.white}
                                onTouchEnd={() => console.log("here1")}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"80%"}
                            />
                        </View>
                    ))}
                    {/* Button */}
                    <View style={{ marginTop: RFPercentage(3), width: '100%', marginBottom: RFPercentage(20) }}>
                        <MyAppButton
                            title="Setup Spot"
                            bold={false}
                            onPress={() => handleLogin()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            width={"90%"}
                        />
                    </View>

                </View>
            </ScrollView>
            {/* Bottom Tab */}
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
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    boxWithShadow: {
        width: '100%',
        backgroundColor: Colors.white,
        height: RFPercentage(18),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.lightestGrey,
        shadowOffset: {
            width: RFPercentage(0),
            height: RFPercentage(3)
        },
        shadowRadius: RFPercentage(1),
        shadowOpacity: 0.1
    }
})

export default ProfileScreen;