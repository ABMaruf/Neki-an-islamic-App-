import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Achievements = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.achievements, styles.iconLayout1]}>
      <Image
        style={[
          styles.monaEendraVc8wjKphakUnsplaIcon,
          styles.achivementsChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/monaeendravc8wj-kphakunsplash-2.png")}
      />
      <Text style={[styles.achievements1, styles.quizScore500FlexBox]}>
        Achievements
      </Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/back11.png")}
        />
      </Pressable>
      <View style={[styles.achivements, styles.achivementsLayout1]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Quiz score 500
        </Text>
        <Image
          style={styles.examTimeIcon}
          contentFit="cover"
          source={require("../assets/exam-time.png")}
        />
      </View>
      <View style={[styles.achivements1, styles.achivementsLayout1]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Quiz score 100
        </Text>
        <Image
          style={styles.examTimeIcon}
          contentFit="cover"
          source={require("../assets/exam-time1.png")}
        />
      </View>
      <View style={[styles.achivements2, styles.achivementsShadowBox]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Memorize 10 Surahs
        </Text>
        <Image
          style={[styles.brainIcon, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/brain.png")}
        />
      </View>
      <View style={[styles.achivements3, styles.achivementsShadowBox]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Memorize 5 Surahs
        </Text>
        <Image
          style={[styles.brainIcon, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/brain.png")}
        />
      </View>
      <View style={[styles.achivements4, styles.achivementsLayout1]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Memorize 10 Duas
        </Text>
        <Image
          style={[styles.brainIcon2, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/brain1.png")}
        />
      </View>
      <View style={[styles.achivements5, styles.achivementsShadowBox]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Memorize 5 Duas
        </Text>
        <Image
          style={[styles.brainIcon, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/brain.png")}
        />
      </View>
      <View style={[styles.achivements6, styles.achivementsShadowBox]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Complete The Quran 10 times
        </Text>
        <Image
          style={[styles.layer2Icon, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/layer-2.png")}
        />
      </View>
      <View style={[styles.achivements7, styles.achivementsShadowBox]}>
        <View style={[styles.achivementsChild, styles.achivementsLayout]} />
        <View style={[styles.achivementsItem, styles.achivementsLayout]} />
        <Text style={[styles.quizScore500, styles.quizScore500FlexBox]}>
          Complete The Quran once
        </Text>
        <Image
          style={[styles.layer2Icon, styles.brainIconLayout]}
          contentFit="cover"
          source={require("../assets/layer-2.png")}
        />
      </View>
      <Image
        style={styles.underbarButtonsIcon}
        contentFit="cover"
        source={require("../assets/underbar-buttons1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  achivementsChildPosition: {
    left: 0,
    top: 0,
  },
  quizScore500FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  achivementsLayout1: {
    height: 82,
    width: 402,
  },
  achivementsLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  achivementsShadowBox: {
    left: 14,
    height: 82,
    width: 402,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  brainIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "12.44%",
    position: "absolute",
    overflow: "hidden",
  },
  monaEendraVc8wjKphakUnsplaIcon: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 430,
    position: "absolute",
    height: 932,
  },
  achievements1: {
    top: 53,
    left: 118,
    fontSize: FontSize.size_13xl,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    color: Color.colorWhite,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    left: 20,
    top: 33,
    width: 40,
    height: 40,
    position: "absolute",
  },
  achivementsChild: {
    backgroundColor: Color.colorWhite,
    height: 82,
    width: 402,
    left: 0,
    top: 0,
  },
  achivementsItem: {
    top: 13,
    left: 23,
    width: 65,
    height: 57,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  quizScore500: {
    top: 32,
    left: 122,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  examTimeIcon: {
    top: 17,
    left: 31,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  achivements: {
    top: 775,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 13,
    width: 402,
    position: "absolute",
  },
  achivements1: {
    top: 679,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 13,
    width: 402,
    position: "absolute",
  },
  brainIcon: {
    left: "7.46%",
    right: "80.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "12.44%",
    bottom: "26.83%",
    top: "28.05%",
    height: "45.12%",
  },
  achivements2: {
    top: 583,
  },
  achivements3: {
    top: 487,
  },
  brainIcon2: {
    right: "79.85%",
    left: "7.71%",
    bottom: "26.83%",
    top: "28.05%",
    height: "45.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "12.44%",
  },
  achivements4: {
    top: 391,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 13,
    width: 402,
    position: "absolute",
  },
  achivements5: {
    top: 295,
  },
  layer2Icon: {
    height: "60.98%",
    top: "19.51%",
    bottom: "19.51%",
    left: "7.46%",
    right: "80.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "12.44%",
  },
  achivements6: {
    top: 199,
  },
  achivements7: {
    top: 103,
  },
  underbarButtonsIcon: {
    top: 876,
    left: 46,
    width: 337,
    height: 30,
    position: "absolute",
  },
  achievements: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Achievements;
