import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Quiz = () => {
  return (
    <View style={styles.quiz}>
      <Image
        style={styles.monaEendraVc8wjKphakUnsplaIcon}
        contentFit="cover"
        source={require("../assets/monaeendravc8wj-kphakunsplash-2.png")}
      />
      <Text style={styles.quiz1}>Quiz</Text>
      <Image
        style={[styles.backIcon, styles.backIconPosition]}
        contentFit="cover"
        source={require("../assets/back11.png")}
      />
      <Image
        style={styles.underbarButtonsIcon}
        contentFit="cover"
        source={require("../assets/underbar-buttons.png")}
      />
      <View style={[styles.duaCatagories, styles.duaLayout1]}>
        <View style={[styles.duaCatagoriesChild, styles.duaLayout]} />
        <Image
          style={[styles.duaCatagoriesItem, styles.duaLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.children, styles.backIconPosition]}>Children</Text>
        <Image
          style={styles.familyIcon}
          contentFit="cover"
          source={require("../assets/family.png")}
        />
      </View>
      <View style={[styles.duaCatagories1, styles.duaLayout1]}>
        <View style={[styles.duaCatagoriesChild, styles.duaLayout]} />
        <Image
          style={[styles.duaCatagoriesItem, styles.duaLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.children, styles.backIconPosition]}>Children</Text>
        <Image
          style={styles.familyIcon}
          contentFit="cover"
          source={require("../assets/family.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIconPosition: {
    top: 33,
    position: "absolute",
  },
  duaLayout1: {
    height: 82,
    width: 190,
  },
  duaLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  monaEendraVc8wjKphakUnsplaIcon: {
    left: 1,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 430,
    top: 0,
    position: "absolute",
    height: 932,
  },
  quiz1: {
    top: 53,
    left: 175,
    fontSize: FontSize.size_29xl,
    lineHeight: 58,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  backIcon: {
    left: 20,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  underbarButtonsIcon: {
    top: 870,
    left: 44,
    width: 337,
    height: 30,
    position: "absolute",
  },
  duaCatagoriesChild: {
    left: 0,
    backgroundColor: Color.colorWhite,
    height: 82,
    width: 190,
    top: 0,
  },
  duaCatagoriesItem: {
    top: 11,
    left: 18,
    width: 60,
    height: 60,
  },
  children: {
    left: 95,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  familyIcon: {
    top: 16,
    left: 24,
    width: 50,
    height: 50,
    position: "absolute",
  },
  duaCatagories: {
    left: 13,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 247,
    width: 190,
    position: "absolute",
  },
  duaCatagories1: {
    left: 228,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 247,
    width: 190,
    position: "absolute",
  },
  quiz: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default Quiz;
