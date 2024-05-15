export const navigateToSignIn = navigation => () => {
  navigation.navigate('SignIn');
};

export const navigateToSignUp = navigation => () => {
  navigation.navigate('SignUp');
};

export const navigateToForgetPassword = navigation => () => {
  navigation.navigate('ForgetPassword');
};

export const updateNotification = (updater, text, type = 'error') => {
  updater({text, type});
  setTimeout(() => {
    updater({text: '', type: ''});
  }, 2500);
};
