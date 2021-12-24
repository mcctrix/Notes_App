import React, { useEffect } from "react";
import { Modal, Text, StyleSheet, View, TouchableOpacity } from "react-native";
export default function (props) {
  // useEffect(() => {
  //   console.log(props);
  // }, []);
  return (
    <Modal animationType="slide" transparent={true} visible={props.Display}>
      <View style={styles.Container}>
        <View style={styles.ModalStyle}>
          <TouchableOpacity
            onPress={() => props.ChangeDis(false)}
            style={styles.Button}
          >
            <Text style={styles.ButtonText}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.TitleStyle}>{props.Data.note.value}</Text>
          {props.Data.note.isFav == true && (
            <Text style={styles.FavStyle}>Favourite Note</Text>
          )}
          <Text style={{ fontSize: 30 }}>{props.Data.note.Des}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalStyle: {
    borderRadius: 45,
    borderColor: "#0682a1",
    borderWidth: 7,
    padding: 24,
    height: "65%",
    width: "95%",
    backgroundColor: "white",
    position: "relative",
  },
  Button: {
    position: "absolute",
    bottom: "4%",
    alignSelf: "center",
    width: 60,
    backgroundColor: "black",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    right: 10,
    fontSize: 27,
    color: "white",
  },
  TitleStyle: {
    fontSize: 55,
  },
  FavStyle: {
    fontSize: 33,
    color: "tomato",
  },
});
