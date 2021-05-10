import React from "react";
import { Text } from "react-native";

import defaultSyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return <Text style={[defaultSyles.text, style]} {...otherProps}>{children}</Text>;
}

export default AppText;
