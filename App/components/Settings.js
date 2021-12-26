import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import Header from "./Header";

export default function Settings() {
  return (
    <View style={styles.Container}>
      <Header title="Settings" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
