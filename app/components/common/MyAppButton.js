import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

function MyAppButton({
  title,
  onPress,
  bold = true,
  borderRadius = RFPercentage(30),
  backgroundColor,
  fontFamily = null,
  padding = RFPercentage(2),
  width = "100%",
  color,
  borderWidth = null,
  borderColor = null,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: width,
        borderRadius: borderRadius,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center", //most important
        padding: padding,
      }}
    >
      <Text
        style={{
          fontFamily: fontFamily,
          fontSize: RFPercentage(2.4),
          color: color,
          fontWeight: bold ? "bold" : null,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MyAppButton;
