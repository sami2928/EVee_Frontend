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

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = (values, formikActions) => {
    setTimeout(() => {
      console.log(values, formikActions);
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    }, 3000);
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

export default Login;
