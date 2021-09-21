import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import PopUp from './../components/common/PopUp';

//config
import Colors from '../config/Colors';

function BankInformation(props) {

    const [model, setModel] = useState(false);


    const [inputField, SetInputField] = useState([
        {
            placeholder: "Select Bank Name",
            dropdownIcon: true,
            value: "",
        },
        {
            placeholder: "Account Number",
            value: "",
        },
        {
            placeholder: "Chinedu Ike",
            dropdownIcon: true,
            backGrey: true,
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };



    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#FAFAFA" }}>
            {/* Heading */}
            <Text style={{ fontSize: RFPercentage(2.3), marginTop: RFPercentage(9), color: '#313942', fontFamily: 'Montserrat_500Medium' }}>
                Bank Information
            </Text>

            {/* Icon */}
            <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(10.2), left: RFPercentage(4) }}>
                <Image source={require('../../assets/images/profileicon.png')} />
            </TouchableOpacity>

            {/* Input Fields */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(4) }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={item.backGrey ? Colors.circle : Colors.white}
                            borderColor={"#C3D3D4"}
                            height={RFPercentage(7.3)}
                            fontSize={RFPercentage(2)}
                            // onTouchStart={() => setBottomTab(false)}
                            // onTouchEnd={() => setBottomTab(true)}
                            placeholderColor={item.backGrey ? Colors.black : '#82867D'}
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

            {/* Button */}
            <View style={{ width: '100%', marginTop: RFPercentage(6) }}>
                <MyAppButton
                    title="Submit"
                    padding={RFPercentage(1.7)}
                    bold={false}
                    onPress={() => setModel(true)}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"45%"}
                    borderRadius={10}
                />
            </View>

            {/* PopUp */}
            <PopUp title="Bank account added successfully" buttonTitle="Continue" showModel={model} onPress={() => { props.navigation.navigate("MyProfileScreen"), setModel(false) }} />
        </Screen>
    );
}

export default BankInformation;