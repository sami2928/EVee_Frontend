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

const ScanVehicleQR = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  console.log(`\nScanVehicleQR Profile: ${profile}`);
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

  return (
    <HomeContainer
      onHomePress={handleHomePress}
      onProfilePress={handleProfilePress}
      onLogoutPress={handleLogoutPress}
      showProfileIcon={true}>
      <View style={styles.container}>
        <Text> Scan Vehicle QR Component</Text>
      </View>
    </HomeContainer>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScanVehicleQR;
