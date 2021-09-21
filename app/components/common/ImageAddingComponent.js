import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';


function ImageAddingComponent({ threeBoxes = false, title1, title2, marginTop = RFPercentage(2.5), onUploadImage1 = () => null, onUploadImage2 = () => null, onUploadImage3 = () => null, shelfMainPhoto, shelfPhotoGall2, shelfPhotoGall3 }) {
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

                    <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage1()} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2) }}>
                        {shelfMainPhoto ? <Image resizeMode="cover" source={shelfMainPhoto} style={{ width: RFPercentage(12), height: RFPercentage(11), }} />
                            : <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                        }
                    </TouchableOpacity>

                    {threeBoxes ?
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage2()} style={{ marginLeft: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2) }}>
                                {shelfPhotoGall2 ? <Image resizeMode="cover" source={shelfPhotoGall2} style={{ width: RFPercentage(12), height: RFPercentage(11), }} />
                                    : <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                                }
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage3()} style={{ marginLeft: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), backgroundColor: '#F7F7F7', marginTop: RFPercentage(2) }}>
                                {shelfPhotoGall3 ? <Image resizeMode="cover" source={shelfPhotoGall3} style={{ width: RFPercentage(12), height: RFPercentage(11), }} />
                                    : <Entypo name="plus" size={RFPercentage(4.5)} color="#C3C6D1" />
                                }
                            </TouchableOpacity>

                        </View> : null}


                </View>
            </View>
        </View>
    );
}

export default ImageAddingComponent;