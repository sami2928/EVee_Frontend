import React from 'react'
import { StyleSheet } from 'react-native'
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import AppInput from "../AppInput";
import SubmitButton from '../SubmitButton';
import { useNavigation } from "@react-navigation/native";
import { navigateToLogin, navigateToSignUp } from "../../utils/helper.js";

const ForgetPassword = () => {
  const navigation = useNavigation();

  return (
     <FormContainer>
        <AppInput placeholder = "Email" />
        <SubmitButton title={'send link'} style={styles.subBtn}/>
        <FormNavigator 
          onLeftLinkPress={navigateToLogin(navigation)}
          onRightLinkPress={navigateToSignUp(navigation)} 
          leftLinkText="Log in" 
          rightLinkText="Sign Up" />
     </FormContainer>

  )
}

const styles = StyleSheet.create({
    subBtn:{
        alignItems: "center",
    },
});

export default ForgetPassword;