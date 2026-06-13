import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <Text style={[styles.neki, styles.nekiPosition]}>NEki نیکی</Text>
      <Image
        style={[styles.tajMahalIcon, styles.nekiPosition]}
        contentFit="cover"
        source={require("../assets/taj-mahal.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nekiPosition: {
    top: 234,
    position: "absolute",
  },
  neki: {
    left: 125,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorSeagreen_100,
    textAlign: "left",
  },
  tajMahalIcon: {
    left: 15,
    width: 399,
    height: 426,
    overflow: "hidden",
  },
  loadingScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingScreen;
