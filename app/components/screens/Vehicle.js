import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HomeContainer from "../HomeContainer";
import {Button} from "@ant-design/react-native";
const Vehicle = ({route}) => {
    const { profile, onProfilePress, onLogoutPress, onBackPress, showBackButton } = route.params;
    return(
        <>
            <HomeContainer
                onProfilePress = {onLogoutPress}
                onLogoutPress = {onLogoutPress}
                style={styles.container}>
                <View style={styles.buttonsContainer}>
                    {profile.is_admin ? (
                        <View style={styles.adminButtonsContainer}>
                            <Button onPress={onLogoutPress} type="primary" style={styles.adminButton}>
                                Users
                            </Button>
                        </View>
                    ) : (
                        <View style={styles.nonAdminButtonsContainer}>
                            <Button onPress={onLogoutPress} type="primary" style={styles.nonAdminButton}>
                                Logout
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
        width: (width - 50) / 3.5, // Adjust width to fit 3 buttons in a row
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

export default Vehicle;