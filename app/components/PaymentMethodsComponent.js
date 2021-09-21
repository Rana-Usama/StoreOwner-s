import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';
import MyAppButton from './common/MyAppButton';

function PaymentMethodsComponent({ setShowModel }) {
    const [pinkBackground, setPinkBackground] = useState(0)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
            {/* Below Header Payment Methods */}
            <View style={{ marginTop: RFPercentage(3), width: '90%' }}>

                {/* First Method */}
                <TouchableOpacity onPress={() => setPinkBackground(1)} style={{ height: RFPercentage(10), backgroundColor: pinkBackground === 1 ? '#FFF1F1' : null, borderRadius: RFPercentage(1), marginTop: RFPercentage(1), flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4), marginLeft: RFPercentage(3) }} source={require('../../assets/images/Credit-Card.png')} />
                    <Text style={{ marginLeft: RFPercentage(4.5), color: '#000000', fontSize: RFPercentage(2.6), fontWeight: 'bold' }}>
                        Debit / Credit Card
                    </Text>
                    {pinkBackground === 1 ?
                        <Image style={{ position: 'absolute', right: RFPercentage(3) }} source={require('../../assets/images/tickicon.png')} />
                        :
                        null
                    }
                </TouchableOpacity>

                {/* Second Method */}
                <TouchableOpacity onPress={() => setPinkBackground(2)} style={{ height: RFPercentage(10), backgroundColor: pinkBackground === 2 ? '#FFF1F1' : null, borderRadius: RFPercentage(1), marginTop: RFPercentage(1), flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4), marginLeft: RFPercentage(3) }} source={require('../../assets/images/Wallet.png')} />
                    <Text style={{ marginLeft: RFPercentage(4.5), color: '#000000', fontSize: RFPercentage(2.6), fontWeight: 'bold' }}>
                        Bank Transfer
                    </Text>
                    {pinkBackground === 2 ?
                        <Image style={{ position: 'absolute', right: RFPercentage(3) }} source={require('../../assets/images/tickicon.png')} />
                        :
                        null
                    }
                </TouchableOpacity>

                {/* Third Method */}
                <TouchableOpacity onPress={() => setPinkBackground(3)} style={{ height: RFPercentage(10), backgroundColor: pinkBackground === 3 ? '#FFF1F1' : null, borderRadius: RFPercentage(1), marginTop: RFPercentage(1), flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4), marginLeft: RFPercentage(3) }} source={require('../../assets/images/ATM.png')} />
                    <Text style={{ marginLeft: RFPercentage(4.5), color: '#000000', fontSize: RFPercentage(2.6), fontWeight: 'bold' }}>
                        Saved Card
                    </Text>
                    {pinkBackground === 3 ?
                        <Image style={{ position: 'absolute', right: RFPercentage(3) }} source={require('../../assets/images/tickicon.png')} />
                        :
                        null
                    }
                </TouchableOpacity>
            </View>

            {/* Add card Button */}
            {pinkBackground === 3 ?
                <View style={{ alignItems: 'center', height: RFPercentage(20), width: '100%' }}>
                    <View style={{ marginRight: RFPercentage(6), marginTop: RFPercentage(3), width: '100%' }}>
                        <MyAppButton
                            title="ADD CARD"
                            padding={RFPercentage(1.6)}
                            bold={false}
                            onPress={() => setShowModel(true)}
                            borderRadius={RFPercentage(2)}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            width={"35%"}
                        />
                    </View>
                </View>
                :
                null
            }
        </View>
    );
}

export default PaymentMethodsComponent;