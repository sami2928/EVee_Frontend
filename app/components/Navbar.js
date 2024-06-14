import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@ant-design/react-native"; // Correct library for Ant Design Icons

const Navbar = ({ onProfilePress, onLogoutPress, onBackPress, showBackButton }) => {
    return (
        <View style={styles.navbar}>
            {showBackButton && (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Icon name="user" style={styles.icon} />
                </TouchableOpacity>
            )}
            <View style={styles.rightIcons}>
                <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
                    <Icon name="user" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogoutPress} style={styles.iconContainer}>
                    <Icon name="poweroff" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 60,
        backgroundColor: "#6200EE", // Customize the color as per your preference
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16, // Add spacing between the icons
    },
    icon: {
        fontSize: 24,
        color: "#fff",
    },
});

export default Navbar;

