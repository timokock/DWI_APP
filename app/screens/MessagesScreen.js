import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists'
import Screen from "../components/Screen";

const initialMessages = [
    {
        id: 1,
        title: "Mosh",
        description: "Hi, I´m interested in this item",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "Title2",
        description: "Description2",
        image: require("../assets/mosh.jpg")
    }
]

export default function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages array
        setMessages(messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen>
        <FlatList 
            data={messages} 
            keyExtractor={messages => messages.id.toString()} 
            renderItem={({ item }) => <ListItem 
                title={item.title} 
                subTitle={item.description} 
                image={item.image} 
                onPress={() => console.log("Message selected:", item)}
                renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} 
                />}
            />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing} 
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: "Title2",
                        description: "Description2",
                        image: require("../assets/mosh.jpg")
                    }
                ])
            }}
        />
        </Screen>
    )
}

const styles = StyleSheet.create({})
