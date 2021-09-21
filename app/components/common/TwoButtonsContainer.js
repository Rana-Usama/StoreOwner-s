import React from 'react';
import { View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import MyAppButton from './MyAppButton';

//config
import Colors from '../../config/Colors';

function TwoButtonsContainer({ button2Background = false, buttonTitle1, buttonTitle2, onPressButton1 = () => { }, onPressButton2 = () => { } }) {
    return (
        <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, justifyContent: 'space-evenly', height: RFPercentage(8.6), marginTop: RFPercentage(8), borderRadius: RFPercentage(0.5) }}>
            <MyAppButton
                title={buttonTitle1}
                onPress={onPressButton1}
                backgroundColor={button2Background ? null : Colors.lightestOrange}
                borderRadius={RFPercentage(3.6)}
                fontFamily={"Quicksand_500Medium"}
                bold={false}
                color={button2Background ? Colors.lightestGrey : Colors.white}
                width={"40%"}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MyAppButton
                    title={buttonTitle2}
                    fontFamily={"Quicksand_500Medium"}
                    onPress={onPressButton2}
                    backgroundColor={button2Background ? Colors.lightestOrange : null}
                    bold={false}
                    color={button2Background ? Colors.white : Colors.lightestGrey}
                    width={"100%"}
                />
            </View>
        </View>
    );
}

export default TwoButtonsContainer;