import AppInput from '../AppInput';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {navigateToForgetPassword, navigateToLogin} from '../../utils/helper.js';
import * as yup from 'yup';
import CustomFormik from '../CustomFormik.js';
import axios from 'axios';

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

  const handleSignUp = async (values, formikActions) => {
    try {
      const {data} = await axios.post(
        'http://192.168.1.9:8000/profile/auth/register',
        {...values},
      );
      console.log(data);

      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
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
