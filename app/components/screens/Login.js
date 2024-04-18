import { useNavigation } from "@react-navigation/native";
import AppInput from "../AppInput";
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import SubmitButton from "../SubmitButton";
import { navigateToForgetPassword, navigateToSignUp } from "../../utils/helper.js";

const Login = () => {
  const navigation = useNavigation();

  return (
    <FormContainer>
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" />
      <SubmitButton title="Login" />
      <FormNavigator 
        onLeftLinkPress={navigateToSignUp(navigation)}
        onRightLinkPress={navigateToForgetPassword(navigation)} 
        leftLinkText="Sign Up" 
        rightLinkText="Forget Password" />
    </FormContainer>
  );
};

export default Login;
