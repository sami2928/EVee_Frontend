import React from 'react';
import {StyleSheet} from 'react-native';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import AppInput from '../AppInput';
import SubmitButton from '../SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {navigateToLogin, navigateToSignUp} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';

const initialValues = {
  email: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email!')
    .required('Email is missing!'),
});

const ForgetPassword = () => {
  const navigation = useNavigation();

  const resetLink = (values, formikActions) => {
    console.log(values);
    console.log(formikActions);
  };

  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={resetLink}>
        <AppInput name="email" placeholder="Email" />
        <SubmitButton title={'send link'} style={styles.subBtn} />
        <FormNavigator
          onLeftLinkPress={navigateToLogin(navigation)}
          onRightLinkPress={navigateToSignUp(navigation)}
          leftLinkText="Log in"
          rightLinkText="Sign Up"
        />
      </CustomFormik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  subBtn: {
    alignItems: 'center',
  },
});

export default ForgetPassword;
