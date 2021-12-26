import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "./constants/GlobalStyles";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.Title, GlobalStyles.Font]}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  Title: {
    fontSize: 30,
  },
});
