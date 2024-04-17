import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo:{
    height: 125,
    width: 125,
    marginBottom: 20,
    marginTop: height * 0.15,
    alignSelf: "center",
  },
});

export default FormContainer;
