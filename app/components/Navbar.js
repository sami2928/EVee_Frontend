import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Navbar = ({ onHomePress, onProfilePress, onLogoutPress, showProfileIcon }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={onHomePress} style={styles.homeButton}>
                <Text style={styles.homeText}>Comsats_EVee</Text>
            </TouchableOpacity>
            <View style={styles.rightIcons}>
                {showProfileIcon && (
                    <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
                        <Icon name="person-circle-outline" style={styles.icon} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={onLogoutPress} style={styles.iconContainer}>
                    <Icon name="power" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 60,
        backgroundColor: "#8469cf",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    homeButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    homeText: {
        fontSize: 20,
        color: "#fff",
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        marginLeft: 16,
    },
    icon: {
        fontSize: 24,
        color: "#fff",
    },
});

export default Navbar;
