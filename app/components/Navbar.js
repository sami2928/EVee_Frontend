import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Use Ionicons from react-native-vector-icons

const Navbar = ({ onHomePress, onProfilePress, onLogoutPress }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={onHomePress}>
                <Text style={styles.title}>Comsats_EVee</Text>
            </TouchableOpacity>
            <View style={styles.rightIcons}>
                <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
                    <Icon name="person-outline" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogoutPress} style={styles.iconContainer}>
                    <Icon name="log-out-outline" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 60,
        backgroundColor: "#8469cf", // Customize the color as per your preference
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        marginLeft: 16, // Add spacing between the icons
    },
    icon: {
        fontSize: 24,
        color: "#fff",
    },
});

export default Navbar;
