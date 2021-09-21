import React from 'react';
import { View, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';

function TypeLocationScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            {/* Top search Container */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(20), marginTop: RFPercentage(3), borderRadius: RFPercentage(4), backgroundColor: Colors.primary }}>
                <Text style={{ marginTop: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(3), fontFamily: "Philosopher_700Bold" }} >Select Location</Text>
                {/* Search Input Field */}
                <View style={{ marginTop: RFPercentage(2) }} >
                    <InputField
                        secure={false}
                        placeholder={'Search for spot…'}
                        placeholderColor={Colors.grey}
                        onTouchStart={() => props.navigation.navigate('ChooseLocation')}
                        width={"100%"}
                        handleFeild={() => null}
                        backgroundColor={Colors.grey1}
                        fontSize={RFPercentage(2.2)}
                        leftIconName={'search'}
                        borderWidth={0}
                    />
                </View>
            </View>
        </Screen>
    );
}

export default TypeLocationScreen;