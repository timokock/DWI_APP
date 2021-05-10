import React from "react";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import Screen from "../components/Screen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Screen style={styles.container}>
    <Tab.Navigator >
        <Tab.Screen name="Feed" component={FeedNavigator} options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} /> }} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({ navigation }) => ({
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> })} />
        <Tab.Screen name="Account" component={AccountNavigator} options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} /> }} />
    </Tab.Navigator>
    </Screen>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    }
});

export default AppNavigator;
