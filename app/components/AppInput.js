import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";

const AppInput = ({ value, placeholder, onChange, ...rest }) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={styles.input}
      {...rest}
    />
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: "#eae9ef",
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    color: "#8469cf",
  },
});

export default AppInput;
