import AppInput from "../AppInput";
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import SubmitButton from "../SubmitButton";

const Login = () => {
  return (
    <FormContainer>
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" />
      <SubmitButton title="Login" />
      <FormNavigator leftLinkText="Sign Up" rightLinkText="Forget Password" />
    </FormContainer>
  );
};

export default Login;
