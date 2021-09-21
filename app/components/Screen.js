import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Colors from "../config/Colors";

function Screen({ children, style, barColor = Colors.white, barStyle = "default" }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? <StatusBar backgroundColor={barColor} barStyle={barStyle} /> : null}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
