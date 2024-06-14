import React from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
    Image,
} from "react-native";
import Navbar from './Navbar';

const HomeContainer = ({ children, onProfilePress, onLogoutPress, onBackPress, isHomeScreen}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Navbar
                onProfilePress = {onProfilePress}
                onLogoutPress = {onLogoutPress}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    scrollView: {
        alignItems: "center",
    },
    logo:{
        height: 125,
        width: 125,
        marginBottom: 20,
        marginTop: height * 0.30,
        alignSelf: "center",
    },
});

export default HomeContainer;
