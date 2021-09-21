import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import LoadingModal from "./../components/common/LoadingModel";
import InputField from "../components/common/InputField";
import MyAppButton from "./../components/common/MyAppButton";

function LoginScreen(props) {
  const [indicator, showIndicator] = useState(false);
  const [inputField, SetInputField] = useState([
    {
      placeholder: "E-mail",
      value: "",
    },
    {
      placeholder: "Password",
      secure: true,
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    showIndicator(true);
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
      alert("Please fill all the feilds !");
      showIndicator(false);
      return true;
    }

    try {
      // API integration will come here
      props.navigation.navigate('HomeDrawer')
    } catch (error) {
      alert("Login Error");
    }

    showIndicator(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <LoadingModal show={indicator} />

        {/* Logo */}
        <View style={{ marginBottom: RFPercentage(3) }}>
          <Image source={require("../../assets/images/logo.png")} />
        </View>


        {/*  Store Owner's App Text */}
        <Image source={require('../../assets/images/text.png')} />

        {/* InputFields */}
        <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
          {inputField.map((item, i) => (
            <InputField
              key={i}
              textCenter={"center"}
              secure={item.secure}
              placeholder={item.placeholder}
              handleFeild={(text) => handleChange(text, i)}
              value={item.value}
              width={"85%"}
              borderRadius={RFPercentage(10)}
            />
          ))}
        </View>

        {/* Login Button */}
        <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2) }}>
          <MyAppButton
            title="Login"
            onPress={() => handleLogin()}
            backgroundColor={Colors.primary}
            color={Colors.white}
            width={"85%"}
          />
        </View>
        {/* forget password */}
        <View style={{ marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: RFPercentage(2), color: Colors.inputFieldBorder, fontWeight: "400" }}>
              Forget Password
            </Text>
          </TouchableOpacity>


          <View style={{ height: RFPercentage(2.5), backgroundColor: "rgba(195, 211, 212, 0.5)", width: 1, }}></View>

          {/* create account */}
          <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} >
            <Text style={{ fontSize: RFPercentage(2), color: Colors.inputFieldBorder, fontWeight: "400" }}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
