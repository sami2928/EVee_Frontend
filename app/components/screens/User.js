import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from "@ant-design/react-native";
import HomeContainer from "../HomeContainer";
const User = ({route}) => {
    const { profile, onProfilePress, onLogoutPress, onBackPress, showBackButton } = route.params;

    return(
        <>
            <HomeContainer
                onProfilePress = {onLogoutPress}
                onLogoutPress = {onLogoutPress}
                onBackPress={onBackPress}
                showBackButton={showBackButton}
                style={styles.container}>
                <View style={styles.buttonsContainer}>
                    {profile.is_admin ? (
                        <View style={styles.adminButtonsContainer}>
                            <Button onPress={onLogoutPress} type="primary" style={styles.adminButton}>
                                Vehicles
                            </Button>
                            <Button onPress={onLogoutPress} type="primary" style={styles.adminButton}>
                                Add Vehicle
                            </Button>
                        </View>
                    ) : (
                        <View style={styles.nonAdminButtonsContainer}>
                            <Button onPress={onLogoutPress} type="primary" style={styles.nonAdminButton}>
                                Scan Vehicle QR Code
                            </Button>
                        </View>
                    )}
                </View>
            </HomeContainer>
        </>
    )
}
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
        height: 640,
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
        width: (width - 50) / 4-5, // Adjust width to fit 3 buttons in a row
        marginVertical: 10,
        marginHorizontal: 5,
    },
    nonAdminButton: {
        backgroundColor: '#8469cf',
        borderRadius: 15,
        width: (width - 50) / 3, // Adjust width to fit 3 buttons in a row
        marginVertical: 10,
        marginHorizontal: 5, // Add horizontal margin for spacing
    },
})

export default User;