import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Icon } from "@ant-design/react-native";

const CustomHeader = ({ profile }) => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.dispatch(StackActions.replace('SignIn'));
    };

    const handleProfile = () => {
        navigation.dispatch(StackActions.replace('User', { profile: profile }));
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleProfile}>
                <Icon name="user" size="lg" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <Icon name="logout" size="lg" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: '#8469cf',
    },
});

export default CustomHeader;
