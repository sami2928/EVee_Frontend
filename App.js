import React from 'react'
import Login from './app/components/screens/Login'
import Signup from './app/components/screens/Signup'
import ForgetPassword from './app/components/screens/ForgetPassword'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigator/AuthNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const theme = {
    ...DefaultTheme,
    Colors: {...DefaultTheme.colors, background: '#fff'},
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default App