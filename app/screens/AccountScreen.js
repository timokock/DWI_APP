import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from "../components/Screen";
import colors from '../config/colors';
import Icon from "../components/Icon";
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: routes.LISTING_SCREEN
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES_SCREEN
    }
]

export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title= "Mosh Hamedani"
                subTitle= "programmingwithmosh@gmail.com"
                image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    key={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroundColor={item.icon.backgroundColor} 
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
