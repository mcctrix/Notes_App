import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "./constants/GlobalStyles";

export default function Settings() {
  return (
    <View>
      <Text style={[{ fontSize: 45 }, GlobalStyles.Font]}>Hello</Text>
    </View>
  );
}
