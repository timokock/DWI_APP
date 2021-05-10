import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.primary} size={60} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: colors.white,
        height: 70,
        width: 70,
        borderRadius: 40,
        bottom: 25
    }
});