import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const MasjidPogungDalanganDBsQFuI = () => {
  return (
    <ImageBackground
      style={styles.masjidPogungDalanganDbsqfuiIcon}
      resizeMode="cover"
      source={require("../assets/masjidpogungdalangandbsqfuibxg4unsplash1.png")}
    />
  );
};

const styles = StyleSheet.create({
  masjidPogungDalanganDbsqfuiIcon: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 414,
    height: 479,
  },
});

export default MasjidPogungDalanganDBsQFuI;
