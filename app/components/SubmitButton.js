import React from "react";
import { StyleSheet, Pressable, Text, Dimensions } from "react-native";

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnTitle}> {title} </Text>
    </Pressable>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  btnContainer:{
    width: width - 40,
    height: 50,
    backgroundColor: "#8469cf",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTitle:{
    fontSize: 20,
    color: "#fff",
  },
});

export default SubmitButton;
