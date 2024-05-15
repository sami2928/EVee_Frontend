import React from 'react';
import {StyleSheet} from 'react-native';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import AppInput from '../AppInput';
import SubmitButton from '../SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {
  navigateToSignIn,
  navigateToSignUp,
  updateNotification,
} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';
import {forgetPassword} from '../../utils/auth.js';
import AppNotification from '../AppNotification.js';
import {useState} from 'react';

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
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const resetLink = async (values, formikActions) => {
    const res = await forgetPassword(values.email);
    formikActions.setSubmitting(false);

    if (!res.success) {
      return updateNotification(setMessage, res.error);
    }
    formikActions.resetForm();
    updateNotification(setMessage, res.message, 'success');
  };

  return (
    <>
      {message.text ? (
        <AppNotification type={message.type} text={message.text} />
      ) : null}

      <FormContainer>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={resetLink}>
          <AppInput name="email" placeholder="Email" />
          <SubmitButton title={'send link'} style={styles.subBtn} />
          <FormNavigator
            onLeftLinkPress={navigateToSignIn(navigation)}
            onRightLinkPress={navigateToSignUp(navigation)}
            leftLinkText="Sign In"
            rightLinkText="Sign Up"
          />
        </CustomFormik>
      </FormContainer>
    </>
  );
};

const styles = StyleSheet.create({
  subBtn: {
    alignItems: 'center',
  },
});

export default ForgetPassword;
