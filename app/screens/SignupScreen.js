import React, { useState } from "react";
import { View, Text, Image, Dimensions, KeyboardAvoidingView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

//components
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

const { height } = Dimensions.get("window")

function SignupScreen(props) {
  const [marginTop, setMarginTop] = useState(RFPercentage(15))
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Type your phone number",
      type: "numeric",
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >
        {/* PathImage */}
        <View style={{ position: "absolute", top: 0, right: 0 }}>
          <Image source={require("../../assets/images/path1.png")} />
        </View>

        {/* BackIcon */}
        <View style={{ alignSelf: "flex-start", position: "absolute", top: RFPercentage(10), left: RFPercentage(4), }} >
          <Ionicons
            name="arrow-back"
            size={40}
            color={Colors.black}
            style={{
              fontSize: RFPercentage(3),
              fontWeight: "bold",
            }}
            onPress={() => props.navigation.navigate("LoginScreen")}
          />
        </View>


        {/* Heading */}
        <View style={{ width: "85%", marginTop: marginTop }} >
          <View style={{ alignSelf: "flex-start", }}>
            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}>What is your </Text>
            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}>phone number ? </Text>
          </View>

          {/* InputField */}
          {inputField.map((item, i) => (
            <View key={i} style={{ marginTop: RFPercentage(3) }} >
              <InputField
                placeholder={item.placeholder}
                keyboardType={item.type}
                backgroundColor={Colors.inputFieldBackgroundColor}
                borderRadius={RFPercentage(1)}
                onTouchStart={() => setMarginTop(RFPercentage(20))}
                onTouchEnd={() => console.log("here1")}
                handleFeild={(text) => handleChange(text, i)}
                value={item.value}
                width={"100%"}
                handleClear={true}
              />
            </View>
          ))}

          {/* Forward */}
          <View style={{ alignSelf: "flex-end" }} >
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={55}
              color={Colors.primary}
              style={{
                fontSize: RFPercentage(3.8),
                fontWeight: "bold",
              }}
              onPress={() => props.navigation.navigate("LoginNumberScreen")}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignupScreen;
