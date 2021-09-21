import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';


function ImageAddingComponent({ threeBoxes = false, title1, title2, marginTop = RFPercentage(2.5) }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '75%', marginTop: marginTop }}>
                <Text style={{ color: '#82867D', fontFamily: 'Quicksand_700Bold', fontSize: RFPercentage(2.5) }}>
                    {title1}
                </Text>
                <Text style={{ color: '#82867D', fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(2.1), marginTop: RFPercentage(0.1) }}>
                    {title2}
                </Text>
                {/* Image adding Box */}
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2) }}>
                        <TouchableOpacity>
                            <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                        </TouchableOpacity>
                    </View>
                    {threeBoxes ?
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2), marginLeft: RFPercentage(1) }}>
                                <TouchableOpacity>
                                    <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                                </TouchableOpacity>
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2), marginLeft: RFPercentage(1) }}>
                                <TouchableOpacity>
                                    <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                                </TouchableOpacity>
                            </View>

                        </View> : null}


                </View>
            </View>
        </View>
    );
}

export default ImageAddingComponent;