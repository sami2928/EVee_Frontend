import {useNavigation} from '@react-navigation/native';
import AppInput from '../AppInput';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';
import {
  navigateToForgetPassword,
  navigateToSignUp,
} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';
import {login} from '../../utils/auth.js';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
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

const SignIn = () => {
  const navigation = useNavigation();

  const handleLogin = async (values, formikActions) => {
    const res = await login(values);
    formikActions.setSubmitting(false);

    if (!res.success) {
      return console.log(res.error);
    }
    formikActions.resetForm();
    console.log(res);
  };

  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        <AppInput name="email" placeholder="Email" />
        <AppInput secureTextEntry name="password" placeholder="Password" />
        <SubmitButton title="Login" />
        <FormNavigator
          onLeftLinkPress={navigateToSignUp(navigation)}
          onRightLinkPress={navigateToForgetPassword(navigation)}
          leftLinkText="Sign Up"
          rightLinkText="Forget Password"
        />
      </CustomFormik>
    </FormContainer>
  );
};

export default SignIn;
