import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "./constants/GlobalStyles";

export default function NoNotes() {
  return (
    <View style={styles.Container}>
      <Text style={[styles.Text, GlobalStyles.Font]}>
        Start Adding Notes....
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
  },
  Text: {
    fontSize: 30,
    textAlign: "center",
  },
});
