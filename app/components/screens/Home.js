import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from "@ant-design/react-native";
import {StackActions, useNavigation} from "@react-navigation/native";
import { useAuth } from "react-oidc-context";
import FormContainer from "../FormContainer";
import HomeContainer from "../HomeContainer";
import HomeButton from "../HomeButton";

const Home = ({route}) => {
  const {profile} = route.params;
  const navigation = useNavigation();


  const handleLogout = () => {
      navigation.dispatch(
          StackActions.replace('SignIn')
      );
  }

  const handleVehicles = () => {
      navigation.dispatch(
          StackActions.replace('Vehicle',{
              profile: profile,
              onLogoutPress: handleLogout,
          })
      );
  }

  const handleBackPress = () => {
      console.log("Back button pressed");
      // Navigate back to the previous screen or perform any action
  };
  return (
      <>
          <HomeContainer
              onProfilePress = {handleLogout}
              onLogoutPress = {handleLogout}
              style={styles.container} >
              <View style={styles.buttonsContainer}>
                  {profile.is_admin ? (
                      <View style={styles.adminButtonsContainer}>
                          <Button onPress={handleVehicles} type="primary" style={styles.adminButton}>
                              Vehicles
                          </Button>
                      </View>
                  ) : (
                      <View style={styles.nonAdminButtonsContainer}>
                          <Button onPress={handleVehicles} type="primary" style={styles.nonAdminButton}>
                              Vehicles
                          </Button>
                      </View>
                  )}
              </View>
          </HomeContainer>
      </>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Position buttons at the bottom
        height: 240,
    },
    adminButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    nonAdminButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    adminButton: {
        backgroundColor: '#8469cf',
        borderRadius: 15,
        width: (width - 50) / 2, // Adjust width to fit 3 buttons in a row
        marginVertical: 10,
        marginHorizontal: 5,
    },
    nonAdminButton: {
        backgroundColor: '#8469cf',
        borderRadius: 15,
        width: (width - 50) / 2, // Adjust width to fit 3 buttons in a row
        marginVertical: 10,
        marginHorizontal: 5, // Add horizontal margin for spacing
    },
});
export default Home;
