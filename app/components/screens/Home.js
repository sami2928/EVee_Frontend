import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import HomeContainer from '../HomeContainer';

const Home = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  console.log(`Home Profile: ${profile}`);
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.dispatch(StackActions.replace('Home', {profile: profile}));
  };

  const handleProfilePress = () =>
    navigation.dispatch(
      StackActions.replace(
        profile.is_admin ? 'ProfileTabNavigator' : 'Profile',
        {
          profile,
        },
      ),
    );

  const handleLogoutPress = () => {
    navigation.dispatch(StackActions.replace('SignIn'));
  };

  const handleVehiclePress = () => {
    navigation.dispatch(
      StackActions.replace('VehicleTabNavigator', {profile: profile}),
    );
  };

  return (
    <HomeContainer
      onHomePress={handleHomePress}
      onProfilePress={handleProfilePress}
      onLogoutPress={handleLogoutPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.vehicleButton}
            onPress={handleVehiclePress}>
            <Text style={styles.buttonText}>Vehicles</Text>
          </TouchableOpacity>
        </View>
      </View>
    </HomeContainer>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted to flex-start
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 125,
    width: 125,
    marginBottom: 20,
    marginTop: height * 0.2, // Adjusted marginTop
  },
  buttonContainer: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 10, // Added marginBottom to push the button up
  },
  vehicleButton: {
    width: width * 0.4,
    paddingVertical: 15,
    backgroundColor: '#8469cf',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
