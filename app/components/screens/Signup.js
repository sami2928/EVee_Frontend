import AppInput from '../AppInput';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {navigateToForgetPassword, navigateToLogin} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';

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

const Signup = () => {
  const navigation = useNavigation();

  const handleSignUp = (values, formikActions) => {
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
        onSubmit={handleSignUp}>
        <AppInput name="userName" placeholder="username" />
        <AppInput name="email" placeholder="Email" />
        <AppInput secureTextEntry name="password" placeholder="Password" />
        <SubmitButton title="Sign Up" />
        <FormNavigator
          onLeftLinkPress={navigateToLogin(navigation)}
          onRightLinkPress={navigateToForgetPassword(navigation)}
          leftLinkText="Log in"
          rightLinkText="Forget Password"
        />
      </CustomFormik>
    </FormContainer>
  );
};

export default Signup;
