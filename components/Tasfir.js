import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Tasfir = ({ style }) => {
  return (
    <View style={[styles.tasfir, style]}>
      <Text style={styles.inThisSurahContainer}>
        <Text
          style={styles.inThisSurah}
        >{`In this Surah, similar to Surah Duha and Surah Inshirra, the holy Prophet (S) is addressed. One of the objective points in all three Suras is that of consoling him when he was faced with a magnitude of painful incidents and numerous taunts by the offensive language of his enemies.

"Surely (O Muhammad) We have given you abundance of good (Kawthar).”
The term /kauthar/ is a descriptive case derived from /kathrat/ with the meaning of 'a lot of goodness, or blessing'; while `}</Text>
        <Text style={styles.graciousPersonsAre}>
          gracious persons are also called 'Kawthar'.
        </Text>
        <Text style={styles.inThisSurah}>{`

What is the purpose of using the term 'Kawthar', here? A ..`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inThisSurah: {
    color: Color.colorBlack,
  },
  graciousPersonsAre: {
    color: Color.colorGray_200,
  },
  inThisSurahContainer: {
    fontSize: FontSize.size_xs,
    lineHeight: 21,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  tasfir: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_400,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_4xs,
    paddingTop: 10,
    paddingRight: Padding.p_smi,
    paddingBottom: 6,
    alignSelf: "stretch",
  },
});

export default Tasfir;
