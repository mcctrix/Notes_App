import React from "react";
import { View, StyleSheet, Platform, StatusBar, Text } from "react-native";
import Header from "./Header";

export default function Settings() {
  return (
    <View style={styles.Container}>
      <Header title="Settings" />
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Coming Soon....
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
