import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors';

//cpomponent
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModel';


function MyProfileScreen(props) {

    const [indicator, showIndicator] = useState(false);


    const handleLogin = () => {
        showIndicator(true);

        try {

            // API integration will come here

        } catch (error) {
            alert("Sign out Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#FAFAFA" }}>
            <LoadingModal show={indicator} />

            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(30) }} source={require('../../assets/images/whitepic.png')}>
                <View style={{ backgroundColor: '#FAFAFA', position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(15), borderTopRightRadius: RFPercentage(15) }}>
                </View>
                <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(5.2), left: RFPercentage(4) }}>
                    <Image source={require('../../assets/images/profileicon.png')} />
                </TouchableOpacity>
            </ImageBackground>
            {/* profile pic */}
            <Image style={{ marginTop: RFPercentage(-20) }} source={require('../../assets/images/man.png')} />
            {/* name */}
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.8), color: '#313942', marginTop: RFPercentage(4) }}>CHIBUEZE OZOEMENA</Text>
            {/* detail boxes */}
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(15), backgroundColor: "#F7F7F7", borderRadius: RFPercentage(2.5) }}>
                        <View style={{ flexDirection: 'row', marginTop: RFPercentage(4), marginLeft: RFPercentage(4) }}>
                            <Image source={require('../../assets/images/mobile.png')} />
                            <Text style={{ marginLeft: RFPercentage(3), fontFamily: 'Quicksand_400Regular', color: '#82867D', fontSize: RFPercentage(2.2) }}>
                                Phone Number
                            </Text>
                        </View>
                        <Text style={{ marginLeft: RFPercentage(9.5), marginTop: RFPercentage(1.5), fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.5) }}>
                            0817 000 0560
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(15), backgroundColor: "#F7F7F7", borderRadius: RFPercentage(2.5) }}>
                        <View style={{ flexDirection: 'row', marginTop: RFPercentage(4), marginLeft: RFPercentage(4) }}>
                            <Image style={{ marginTop: RFPercentage(0.8) }} source={require('../../assets/images/mail.png')} />
                            <Text style={{ marginLeft: RFPercentage(3), fontFamily: 'Quicksand_400Regular', color: '#82867D', fontSize: RFPercentage(2.2) }}>
                                Mail
                            </Text>
                        </View>
                        <Text style={{ marginLeft: RFPercentage(9.5), marginTop: RFPercentage(1.5), fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.5) }}>
                            chibueze@gmail.com
                        </Text>
                    </View>

                    {/* Change buttons */}
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyProfileEditScreen")} style={{ justifyContent: 'center', marginTop: RFPercentage(3), width: '86%', height: RFPercentage(8), backgroundColor: "#ffff", borderRadius: RFPercentage(2.5) }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: RFPercentage(4) }}>
                            <Image source={require('../../assets/images/info.png')} />
                            <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.2) }}>Change Infomation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyProfileEditScreen")} style={{ marginBottom: RFPercentage(5), justifyContent: 'center', marginTop: RFPercentage(3), width: '86%', height: RFPercentage(8), backgroundColor: "#ffff", borderRadius: RFPercentage(2.5) }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: RFPercentage(4) }}>
                            <Image source={require('../../assets/images/pass.png')} />
                            <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.2) }}>Change Password</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '100%', marginBottom: RFPercentage(20) }}>
                        <MyAppButton
                            title="Sign Out"
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
            {/* BottomTab */}
            <View style={{ marginBottom: RFPercentage(0.5), alignItems: 'center', flexDirection: 'row', width: '100%', height: RFPercentage(10.8), position: 'absolute', bottom: 0, borderRadius: RFPercentage(30), backgroundColor: '#F2560E' }}>
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

export default MyProfileScreen;