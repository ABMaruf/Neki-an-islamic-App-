import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={[styles.profileChild, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.monaEendraVc8wjKphakUnsplaIcon}
        contentFit="cover"
        source={require("../assets/monaeendravc8wj-kphakunsplash-2.png")}
      />
      <Image
        style={[styles.profileItem, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.abdullahAlMarufParent}>
        <Text style={styles.abdullahAlMaruf}>Abdullah Al Ma’ruf</Text>
        <View style={styles.points}>
          <View style={styles.pointsChild} />
          <Text style={[styles.text, styles.textFlexBox]}>10000</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
        <Text style={[styles.quranPerformance, styles.detailsTypo]}>
          Quran Performance
        </Text>
        <Text style={[styles.hadithPerformance, styles.socialActivitiesTypo]}>
          Hadith Performance
        </Text>
        <Text style={[styles.socialActivities, styles.socialActivitiesTypo]}>
          Social Activities
        </Text>
        <Text style={[styles.socialActivities, styles.socialActivitiesTypo]}>
          Social Activities
        </Text>
        <TouchableOpacity
          style={[styles.frame1, styles.frameLayout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Pressable
            style={[styles.frameChild, styles.frameLayout]}
            onPress={() => navigation.navigate("Home")}
          />
          <Text style={[styles.signOut, styles.frameLayout]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.back}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    left: 19,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    top: 0,
  },
  detailsTypo: {
    height: 29,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.tajawalRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  socialActivitiesTypo: {
    width: 227,
    left: 32,
    height: 29,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.tajawalRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  frameLayout: {
    height: 56,
    width: 350,
    left: 0,
    position: "absolute",
  },
  profileChild: {
    top: 27,
    width: 113,
    height: 109,
  },
  monaEendraVc8wjKphakUnsplaIcon: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  profileItem: {
    top: 69,
    width: 69,
    height: 69,
  },
  abdullahAlMaruf: {
    color: Color.colorGray_300,
    width: 237,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.tajawalRegular,
    fontSize: FontSize.size_5xl,
    left: 18,
    top: 0,
    position: "absolute",
  },
  pointsChild: {
    top: 10,
    height: 16,
    borderRadius: Border.br_xl,
    width: 130,
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorSteelblue,
    width: 91,
    left: 18,
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  points: {
    top: 14,
    shadowRadius: 4,
    elevation: 4,
    height: 34,
    width: 130,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  abdullahAlMarufParent: {
    top: 74,
    left: 95,
    width: 255,
    height: 48,
    position: "absolute",
  },
  details: {
    top: 16,
    left: 120,
    width: 109,
  },
  quranPerformance: {
    top: 104,
    left: 30,
    width: 199,
  },
  hadithPerformance: {
    top: 148,
  },
  socialActivities: {
    top: 192,
  },
  frameChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSeagreen_100,
    top: 0,
    height: 56,
  },
  signOut: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    top: 0,
  },
  frame1: {
    top: 601,
    overflow: "hidden",
  },
  frame: {
    top: 170,
    left: 40,
    backgroundColor: Color.colorGray_400,
    shadowRadius: 10,
    elevation: 10,
    height: 657,
    width: 350,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_3xs,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  back: {
    left: 1,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default Profile;
