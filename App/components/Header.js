import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  Title: {
    fontSize: 20,
  },
});
