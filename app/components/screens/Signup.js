import AppInput from "../AppInput";
import FormContainer from "../FormContainer";
import FormNavigator from "../FormNavigator";
import SubmitButton from "../SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { navigateToForgetPassword, navigateToLogin } from "../../utils/helper.js";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <FormContainer>
      <AppInput placeholder="username" />
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" />
      <SubmitButton title="Signup" />
      <FormNavigator 
        onLeftLinkPress={navigateToLogin(navigation)}
        onRightLinkPress={navigateToForgetPassword(navigation)} 
        leftLinkText="Log in" 
        rightLinkText="Forget Password" />
    </FormContainer>
  );
};

export default Signup;
