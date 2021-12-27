import React from "react";
import { Modal, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

export default function ConfirmDelete(props) {
  return (
    <Modal visible={props.Display} transparent={true}>
      <View style={styles.container}>
        <View style={styles.MainDiv}>
          <Text style={[styles.Text, GlobalStyles.Font]}>
            Are you sure,You want to delete this note?
          </Text>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <TouchableOpacity onPress={props.DeleteNote} style={styles.Btn}>
              <Text style={[GlobalStyles.Font, styles.BtnText]}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.ChangeDis(false);
              }}
              style={[styles.Btn]}
            >
              <Text style={[GlobalStyles.Font, styles.BtnText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  MainDiv: {
    borderColor: "#055d75",
    borderWidth: 2,
    borderRadius: 50,
    height: 250,
    width: 380,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    textAlign: "center",
    fontSize: 30,
  },
  BtnText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  Btn: {
    marginHorizontal: 15,
    backgroundColor: "#055d75",
    width: 110,
    height: 50,
  },
});
