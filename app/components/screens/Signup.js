import AppInput from "../AppInput";
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import SubmitButton from "../SubmitButton";

const Signup = () => {
  return (
    <FormContainer>
      <AppInput placeholder="username" />
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" />
      <SubmitButton title="Signup" />
      <FormNavigator leftLinkText="Log in" rightLinkText="Forget Password" />
    </FormContainer>
  );
};

export default Signup;
