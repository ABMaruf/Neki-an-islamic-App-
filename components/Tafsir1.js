import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Tafsir1 = ({ style }) => {
  return (
    <View style={[styles.tafsir, style]}>
      <Text style={styles.tafsir1}>Tafsir</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tafsir1: {
    position: "absolute",
    top: 6,
    left: 16,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  tafsir: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_200,
    width: 70,
    height: 36,
  },
});

export default Tafsir1;
