import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Screen from "./Screen";
import PickerItem from './PickerItem';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export default function AppPicker({ 
        icon, 
        items, 
        numberOfColumns = 1,
        onSelectItem, 
        placeholder, 
        PickerItemComponent = PickerItem, 
        selectedItem, 
        width="100%" 
    }) {
    const [ modalVisible, setModalVisible ] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal animationType="slide" visible={modalVisible}>
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList 
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => <PickerItemComponent item={item} label={item.label} onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                        }} />}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: defaultStyles.colors.light,
       borderRadius: 25,
       flexDirection: "row",
       padding: 15,
       marginVertical: 10,
       alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }
})
