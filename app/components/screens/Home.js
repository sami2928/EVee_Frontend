import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import HomeContainer from '../HomeContainer';

const Home = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  const navigation = useNavigation();

  const handleHomePress = () => {
    console.log('profile: ', profile);
    navigation.dispatch(StackActions.replace('Home', {profile: profile}));
  };

  const handleProfilePress = () => {
    // Navigate to the Profile screen or perform profile-related actions
  };

  const handleLogoutPress = () => {
    navigation.dispatch(StackActions.replace('SignIn'));
  };

  return (
      <HomeContainer
          onHomePress={handleHomePress}
          onProfilePress={handleProfilePress}
          onLogoutPress={handleLogoutPress}
      >
        <View style={styles.content}>
          <Text>Welcome to the Home Screen</Text>
        </View>
      </HomeContainer>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
