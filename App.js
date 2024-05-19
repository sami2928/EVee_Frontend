import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigator/AuthNavigator';
import Verification from './app/components/screens/Verification';

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
export default App;
