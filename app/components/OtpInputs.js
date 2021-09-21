import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

import OTPTextView from 'react-native-otp-textinput';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    roundedTextInput: {
        borderRadius: 10,
        backgroundColor: Colors.codeInputFields,
        borderWidth: 0,
        borderColor: Colors.codeInputFields,
        height: RFPercentage(7),
        width: RFPercentage(6.6),
        marginRight: 2
    },
    textInput: {
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
    },

});

export default class OtpInputs extends Component {
    state = {
        otpInput: '',
        inputText: '',
    };

    alertText = () => {
        const { otpInput = '' } = this.state;
        if (otpInput) {
            Alert.alert(otpInput);
        }
    };

    clear = () => {
        this.input1.clear();
    };

    updateOtpText = () => {
        // will automatically trigger handleOnTextChange callback passed
        this.input1.setValue(this.state.inputText);
    };

    render() {
        return (
            <View style={styles.container}>
                <OTPTextView
                    handleTextChange={(e) => this.props.getOtp(e)}
                    inputCount={6}
                    containerStyle={{}}
                    textInputStyle={styles.roundedTextInput}
                    keyboardType="numeric"
                    tintColor="rgba(255, 0, 0, 0)"
                    offTintColor="rgba(255, 0, 0, 0)"
                />
            </View>
        );
    }
}