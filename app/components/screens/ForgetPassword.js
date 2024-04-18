import React from 'react'
import { View, StyleSheet } from 'react-native'
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import AppInput from "../AppInput";
import SubmitButton from '../SubmitButton';

const ForgetPassword = () => {
  return (
     <FormContainer>
        <AppInput placeholder = "Email" />
        <SubmitButton title={'send link'} style={styles.subBtn}/>
        <FormNavigator leftLinkText="Log in" rightLinkText="Sign Up" />
     </FormContainer>

  )
}

const styles = StyleSheet.create({
    subBtn:{
        alignItems: "center",
    },
});

export default ForgetPassword;