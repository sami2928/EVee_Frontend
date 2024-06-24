// ProfileTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Users from './Users'; // Assume you have a Users component
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ProfileTabNavigator = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Users') {
            iconName = 'people';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        activeTintColor: '#8469cf',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{profile: profile}}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        initialParams={{profile: profile}}
      />
    </Tab.Navigator>
  );
};

export default ProfileTabNavigator;
