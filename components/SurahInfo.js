import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SurahInfo = ({ style }) => {
  return (
    <View style={[styles.surahInfo, style]}>
      <Text style={styles.surahInfo1}>Surah info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  surahInfo1: {
    position: "absolute",
    top: 6,
    left: 13,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorDimgray_400,
    textAlign: "center",
  },
  surahInfo: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_300,
    width: 97,
    height: 36,
    overflow: "hidden",
  },
});

export default SurahInfo;
