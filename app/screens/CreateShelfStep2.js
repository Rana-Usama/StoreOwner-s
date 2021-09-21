import React, { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';
import LoadingModal from '../components/common/LoadingModel';

//config
import Colors from '../config/Colors';
import ImageAddingComponent from '../components/common/ImageAddingComponent';

function CreateShelfStep2(props) {

    const [bottomTab, setBottomTab] = useState(true);
    const [indicator, showIndicator] = useState(false);

    // const [model, setModel] = useState(false);

    const handleLogin = () => {
        showIndicator(true);
        props.navigation.navigate("CreateShelfStep3")

        try {
            // API integration will come here

        } catch (error) {
            alert("Can't Proceed");
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
            {/* Image adding component */}
            <ImageAddingComponent title1="Shelf Main Photo" title2="Upload the main photo for this listing" />
            <ImageAddingComponent threeBoxes={true} title1="Shelf Main Photo" title2="Upload the main photo for this listing" />


            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7), marginBottom: RFPercentage(25) }}>
                <MyAppButton
                    title="Continue"
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={"#FD6721"}
                    color={Colors.white}
                    width={"90%"}
                />
            </View>

            {bottomTab ?
                <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                    {/* Bottom Tab */}
                    <BottomTab />
                </View> :
                null
            }


            {/* <PopUp title="Your paymet has been confirmed. You can check the details for departure. " buttonTitle="Continue" showModel={model} onPress={() => { props.navigation.navigate("MyStoresScreen"), setModel(false) }} /> */}
        </Screen>
    );
}

export default CreateShelfStep2;