import AppInput from '../AppInput';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  navigateToForgetPassword,
  navigateToSignIn,
  updateNotification,
} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';
import {register} from '../../utils/auth.js';
import AppNotification from '../AppNotification.js';
import {useState} from 'react';

const initialValues = {
  userName: '',
  email: '',
  password: '',
};

const validationSchema = yup.object({
  userName: yup.string().trim().required('Username is missing!'),
  email: yup
    .string()
    .trim()
    .email('Invalid email!')
    .required('Email is missing!'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is missing!'),
});

const SignUp = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const handleSignUp = async (values, formikActions) => {
    const res = await register(values);
    formikActions.setSubmitting(false);

    if (!res.success) {
      return updateNotification(setMessage, res.error);
    }
    formikActions.resetForm();
    navigation.dispatch(
      StackActions.replace('Verification', {profile: res.user}),
    );
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
          onSubmit={handleSignUp}>
          <AppInput name="userName" placeholder="username" />
          <AppInput name="email" placeholder="Email" />
          <AppInput secureTextEntry name="password" placeholder="Password" />
          <SubmitButton title="Sign Up" />
          <FormNavigator
            onLeftLinkPress={navigateToSignIn(navigation)}
            onRightLinkPress={navigateToForgetPassword(navigation)}
            leftLinkText="Sign In"
            rightLinkText="Forget Password"
          />
        </CustomFormik>
      </FormContainer>
    </>
  );
};

export default SignUp;
