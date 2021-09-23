import React, { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';
import LoadingModal from '../components/common/LoadingModel';

//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import PopUp from '../components/common/PopUp';

function CreateShelfStep3(props) {
    const [model, setModel] = useState(false);


    const data = [
        {
            title: 'Select services that apply to your space.',
            sub1: 'In-store promotion',
            sub2: ' Outside Display',
            sub3: 'Any other service',
        },
        {
            title: 'Select Add-ons that apply to your space.',
            sub1: 'In-store promotion',
            sub2: 'Outside Display',
            sub3: 'Any other service',
        },
    ]

    const [bottomTab, setBottomTab] = useState(true);
    const [indicator, showIndicator] = useState(false);

    // const [model, setModel] = useState(false);

    const handleLogin = () => {
        setModel(true);
        showIndicator(true);

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
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                    <Image source={require('../../assets/images/notiDash.png')} />
                </TouchableOpacity>
                {/*Image Heading */}
                <Text style={{ fontWeight: 'bold', color: Colors.white, bottom: RFPercentage(2.3), fontSize: RFPercentage(2.7) }}>
                    Create Shelf
                </Text>
            </ImageBackground>
            {/* Central heading */}
            <Text style={{ color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.5), fontFamily: 'Montserrat_500Medium' }}>
                SHELF SERVICES
            </Text>
            {/* Text starts */}

            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}  >

                    {data.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(5), marginRight: RFPercentage(4) }}>
                            <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.2) }}>
                                {item.title}
                            </Text>
                            <View style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(2), flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(1.9), color: '#82867D' }}>
                                    {item.sub1}
                                </Text>
                                <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(1.8), color: '#82867D' }}>
                                    {item.sub2}
                                </Text>
                            </View>
                            <View style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(2), flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(1.9), color: '#82867D' }}>
                                    {item.sub3}
                                </Text>
                            </View>
                        </View>
                    ))}

                    <View style={{ marginTop: RFPercentage(5), marginLeft: RFPercentage(-18) }}>
                        <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.2) }}>
                            Terms and Conditions
                        </Text>
                        <Text style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(2), fontFamily: 'Quicksand_500Medium', fontSize: RFPercentage(1.9), color: '#82867D' }}>
                            Enter details below if any
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(4) }} >
                        <InputField
                            secure={false}
                            height={RFPercentage(20)}
                            borderRadius={RFPercentage(7)}
                            placeholderColor={Colors.grey}
                            onTouchStart={() => setBottomTab(false)}
                            onTouchEnd={() => setBottomTab(true)}
                            width={"85%"}
                            handleFeild={() => null}
                            backgroundColor={"#F7F7F7"}
                            fontSize={RFPercentage(2.2)}
                            // leftIconName={'search'}
                            borderWidth={0}
                        />
                    </View>
                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7), marginBottom: RFPercentage(25) }}>
                        <MyAppButton
                            title="Create Spot"
                            bold={false}
                            onPress={() => handleLogin()}
                            backgroundColor={"#FD6721"}
                            color={Colors.white}
                            width={"90%"}
                        />
                    </View>
                </View>

            </ScrollView>
            {/* Bottom tab */}
            {bottomTab ?
                <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                    {/* Bottom Tab */}
                    <BottomTab onPressFirstIcon={() => props.navigation.navigate("MyShelvesScreen")} onPressCenterIcon={() => props.navigation.navigate("CreateShelfStep1")} onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
                </View> :
                null
            }


            <PopUp title="Shelf was successfully added to RetailSpot " buttonTitle="Continue" showModel={model} onPress={() => { props.navigation.navigate("CreateShelfStep3"), setModel(false) }} />
        </Screen>
    );
}

export default CreateShelfStep3;