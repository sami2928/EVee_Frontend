import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const AppLink = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linkText:{
    fontSize: 16,
    color: "#8469cf",
  },
});

export default AppLink;
