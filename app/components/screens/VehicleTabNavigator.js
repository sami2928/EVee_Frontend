// VehicleTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddVehicle from './AddVehicle'; // Assume you have an AddVehicle component
import Vehicles from './Vehicles'; // Assume you have a Vehicles component
import ScanVehicleQR from './ScanVehicleQR'; // Assume you have a ScanQR component
import FindVehicle from './FindVehicle'; // Assume you have a FindVehicle component
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const VehicleTabNavigator = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  console.log(`VehicleTabNavigator Profile: ${profile}`);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Add Vehicle':
              iconName = 'car';
              break;
            case 'Vehicles':
              iconName = 'list';
              break;
            case 'Scan QR':
              iconName = 'qr-code';
              break;
            case 'Find Vehicle':
              iconName = 'search';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#8469cf',
        tabBarInactiveTintColor: 'gray',
      })}>
      {profile?.is_admin ? (
        <>
          <Tab.Screen
            name="Add Vehicle"
            component={AddVehicle}
            initialParams={{profile: profile}}
          />
          <Tab.Screen
            name="Vehicles"
            component={Vehicles}
            initialParams={{profile: profile}}
          />
          <Tab.Screen
            name="Scan QR"
            component={ScanVehicleQR}
            initialParams={{profile: profile}}
          />
          <Tab.Screen
            name="Find Vehicle"
            component={FindVehicle}
            initialParams={{profile: profile}}
          />
        </>
      ) : (
        <Tab.Screen
          name="Scan QR"
          component={ScanVehicleQR}
          initialParams={{profile: profile}}
        />
      )}
    </Tab.Navigator>
  );
};

export default VehicleTabNavigator;
