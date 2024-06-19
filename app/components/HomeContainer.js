import React from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
} from "react-native";
import Navbar from './Navbar';

const HomeContainer = ({ children, onHomePress, onProfilePress, onLogoutPress, showProfileIcon = true }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Navbar
                onHomePress={onHomePress}
                onProfilePress={onProfilePress}
                onLogoutPress={onLogoutPress}
                showProfileIcon={showProfileIcon}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    scrollView: {
        alignItems: "center",
    },
});

export default HomeContainer;
