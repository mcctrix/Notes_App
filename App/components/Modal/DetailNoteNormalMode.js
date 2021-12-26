import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

export default function DetailNoteNormalMode(props) {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.Data.ChangeDis(false)}
        style={styles.Button}
      >
        <Text style={[styles.ButtonText, GlobalStyles.Font]}>Close</Text>
      </TouchableOpacity>
      <Text style={[styles.TitleStyle, GlobalStyles.Font]}>
        {props.Data.Data.note.value}
      </Text>
      {props.Data.Data.note.isFav == true && (
        <Text style={[styles.FavStyle, GlobalStyles.Font]}>Favourite Note</Text>
      )}
      <Text style={[{ fontSize: 30 }, GlobalStyles.Font]}>
        {props.Data.Data.note.Des}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    position: "absolute",
    bottom: "4%",
    alignSelf: "center",
    width: 60,
    backgroundColor: "#055d75",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 27,
    color: "white",
  },
  TitleStyle: {
    fontSize: 55,
    marginTop: 30,
  },
  FavStyle: {
    fontSize: 33,
    color: "tomato",
  },
});
