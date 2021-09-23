import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

const searchData = [
    {
        title: 'Dasun Brick Tower',
        subTitle: 'Dasun Travel Plaza, Sidney PI 2.9, NJ Tpke'
    },
    {
        title: 'Dasuny Walking Street',
        subTitle: 'Dasun Travel Plaza, NJ Tpke'
    },
    {
        title: 'Dasun Restaurant',
        subTitle: 'Dasun Travel Plaza, Mile Marker 2.9, NJ Tpke'
    },
    {
        title: 'Dasuny Walking Street',
        subTitle: 'Dasun Travel Plaza, NJ Tpke'
    },
    {
        title: 'Dasun Restaurant',
        subTitle: 'Dasun Travel Plaza, Mile Marker 2.9, NJ Tpke'
    },
    {
        title: 'Dasun Restaurant',
        subTitle: 'Dasun Travel Plaza, Mile Marker 2.9, NJ Tpke'
    },
    {
        title: 'Dasun Restaurant',
        subTitle: 'Dasun Travel Plaza, Mile Marker 2.9, NJ Tpke'
    },
]

function ChooseLocation(props) {
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
                        // onTouchStart={() => props.navigation.navigate('ChooseStore')}
                        width={"100%"}
                        handleFeild={() => null}
                        backgroundColor={Colors.grey1}
                        fontSize={RFPercentage(2.2)}
                        leftIconName={'search'}
                        borderWidth={0}
                    />
                </View>
            </View>
            {/* Search items */}
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
                    {searchData.map((item, i) => (
                        <View key={i} style={{ width: '100%', alignItems: 'flex-start', marginLeft: RFPercentage(8), marginTop: RFPercentage(5) }}>
                            <Text style={{ color: '#2C3849', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}>
                                {item.title}
                            </Text>
                            <Text style={{ color: '#9AA3AE', fontSize: RFPercentage(2), marginTop: RFPercentage(1.5) }}>
                                {item.subTitle}
                            </Text>
                            <View style={{ width: '100%', marginTop: RFPercentage(4), height: RFPercentage(0.3), backgroundColor: '#E2E8F0' }}></View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </Screen>
    );
}

export default ChooseLocation;