import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CountryPicker from 'react-native-country-picker-modal';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//config
import Colors from '../config/Colors';

//components
import MyAppBar from '../components/common/MyAppBar';
import InputField from '../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModel';

function LoginNumberScreen(props) {
    const [indicator, showIndicator] = useState(false);
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState({ callingCode: ["+91"] })

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Number",
            type: "numeric",
            value: ""
        },
    ]);

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "") {
            alert("Please Add the number !");
            showIndicator(false);
            return true;
        }

        let number = country.callingCode[0] + tempfeilds[0].value;

        try {
            // API integration will come here
        } catch (error) {
            alert("Number error!");
        }

        showIndicator(false);
    };


    return (

        <View style={{ flex: 1, alignItems: 'center' }}>
            <LoadingModal show={indicator} />

            <MyAppBar props={props} backPath="SignupScreen" />

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(5) }}>
                <Text style={{ fontSize: RFPercentage(3) }}>Enter your mobile number</Text>
            </View>

            {/* Mobile number input field */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: RFPercentage(3) }}>
                <View style={{ marginRight: RFPercentage(1), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: Colors.inputFieldBackgroundColor, borderColor: Colors.inputFieldBorder, borderWidth: 1, height: RFPercentage(6.8), borderRadius: RFPercentage(1), marginVertical: RFPercentage(0.7) }} >
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter={true}
                        withFlag={true}
                        withCountryNameButton={false}
                        withAlphaFilter={true}
                        withCallingCode={true}
                        withEmoji={true}
                        onSelect={onSelect}
                        withCallingCodeButton={true}
                    />
                    <MaterialCommunityIcons name="chevron-down" color={Colors.grey} size={RFPercentage(3.5)} />
                </View>

                {inputField.map((item, i) => (
                    <InputField
                        key={i}
                        placeholder={item.placeholder}
                        keyboardType={item.type}
                        backgroundColor={Colors.inputFieldBackgroundColor}
                        borderRadius={RFPercentage(1)}
                        handleFeild={(text) => handleChange(text, i)}
                        value={item.value}
                        handleClear={true}
                        width={"58%"}
                    />
                ))}
            </View>

            {/* Text */}
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(3), alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(1.8), right: RFPercentage(1), textTransform: 'uppercase' }}>
                    Retailspot
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(1.8), textTransform: 'uppercase' }}>
                    uses Account Kit, a Facebook
                </Text>
            </View>
            <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.8), textTransform: 'uppercase' }}>
                technology, to help you sign in. You don’t need a
            </Text>
            <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.8), textTransform: 'uppercase' }}>
                Facebook account, Message and data rates may
            </Text>
            <View style={{ flexDirection: "row" }} >
                <Text style={{ marginRight: RFPercentage(0.5), marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.8), textTransform: 'uppercase' }}>
                    apply.
                </Text>
                <TouchableOpacity activeOpacity={0.7} >
                    <Text style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.grey, marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.8), textTransform: 'uppercase' }}>
                        Learn how Facebook users your info.
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Buttons */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                <MyAppButton
                    title="GET A WHATSAPP CODE"
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"85%"}
                />
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(1) }}>
                <MyAppButton
                    title="USE SMS"
                    bold={false}
                    onPress={() => props.navigation.navigate("SentCodeScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"85%"}
                />
            </View>
        </View>
    );
}

export default LoginNumberScreen;