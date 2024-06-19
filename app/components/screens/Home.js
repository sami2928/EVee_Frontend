import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import HomeContainer from '../HomeContainer';

const Home = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.dispatch(StackActions.replace('Home', {profile: profile}));
  };

  const handleProfilePress = () => {
    navigation.dispatch(StackActions.replace('Profile', {profile: profile}));
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
          <Image style={styles.logo} source={require("../../assets/logo.png")} />
          <Text>Welcome to the Home Screen</Text>
        </View>
      </HomeContainer>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 125,
    width: 125,
    marginBottom: 20,
    marginTop: height * 0.30,
    alignSelf: "center",
  },
});

export default Home;
