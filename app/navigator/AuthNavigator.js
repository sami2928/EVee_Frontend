import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../components/screens/SignIn';
import SignUp from '../components/screens/SignUp';
import ForgetPassword from '../components/screens/ForgetPassword';
import Verification from '../components/screens/Verification';
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
