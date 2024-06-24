import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../components/screens/SignIn';
import SignUp from '../components/screens/SignUp';
import ForgetPassword from '../components/screens/ForgetPassword';
import Verification from '../components/screens/Verification';
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';
import Users from '../components/screens/Users';
import ProfileTabNavigator from '../components/screens/ProfileTabNavigator';
import VehicleTabNavigator from '../components/screens/VehicleTabNavigator';
import AddVehicle from '../components/screens/AddVehicle';
import Vehicles from '../components/screens/Vehicles';
import ScanVehicleQR from '../components/screens/ScanVehicleQR';
import FindVehicle from '../components/screens/FindVehicle';

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
      <Stack.Screen
        name="ProfileTabNavigator"
        component={ProfileTabNavigator}
      />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen
        name="VehicleTabNavigator"
        component={VehicleTabNavigator}
      />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen name="Vehicles" component={Vehicles} />
      <Stack.Screen name="ScanVehicleQR" component={ScanVehicleQR} />
      <Stack.Screen name="FindVehicle" component={FindVehicle} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
