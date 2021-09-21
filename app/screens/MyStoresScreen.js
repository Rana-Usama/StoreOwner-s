import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';


//compoenets
import Screen from './../components/Screen';
import NavTitlesAndIcon from '../components/common/NavTitlesAndIcon';

//config
import Colors from '../config/Colors';
import BottomTab from '../components/common/BottomTab';

function MyStoresScreen(props) {

    const data = [
        {
            title: '   Mega Mall, VI',

            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },
        {
            title: '   Mega Mall, VI',
            location: true,
            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },
        {
            title: '   Mega Mall, VI',
            location: true,

            subTitle: '30A mabishi drive, Victoria Island - Lagos'
        },

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#F7F7F7" }}>
            {/* Nav Icon and titles */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <NavTitlesAndIcon mainTitle="My Stores" sideTitle="ADD" />
            </View >
            {/* Cart */}
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(4) }}>
                {data.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(3), width: '90%', height: RFPercentage(15), borderRadius: RFPercentage(2), backgroundColor: Colors.white, }}>
                        <View style={{ marginTop: RFPercentage(4), marginLeft: RFPercentage(3) }}>
                            <Text style={{ color: '#313942', fontSize: RFPercentage(2.5), fontFamily: 'Quicksand_500Medium' }}>
                                {item.title}
                            </Text>
                            <Text style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(1), color: '#82867D', fontFamily: 'Quicksand_400Regular' }} >
                                {item.subTitle}
                            </Text>
                            {item.location ?
                                <Image style={{ marginLeft: RFPercentage(-0.7), marginTop: RFPercentage(-2.3) }} source={require('../../assets/images/loc.png')} />
                                :
                                null
                            }

                        </View>
                        <TouchableOpacity style={{ right: RFPercentage(2), position: 'absolute', top: RFPercentage(3) }}>
                            <SimpleLineIcons name="options-vertical" size={RFPercentage(2.5)} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default MyStoresScreen;