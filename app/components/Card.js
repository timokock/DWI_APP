import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, imageURL, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{uri: imageURL}} style={styles.image} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
