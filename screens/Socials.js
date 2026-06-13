import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Socials = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.socials, styles.iconLayout]}>
      <Image
        style={styles.huilinDaiYiC35jgxyiUnsplasIcon}
        contentFit="cover"
        source={require("../assets/huilindaiyi-c35jgxyiunsplash-3.png")}
      />
      <View style={[styles.profile, styles.profileLayout]}>
        <Image
          style={[styles.profileChild, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={styles.abdullahAlMaruf}>Abdullah Al Ma’ruf</Text>
        <View style={[styles.points, styles.pointsLayout]}>
          <View style={[styles.pointsChild, styles.pointsLayout]} />
          <Text style={[styles.text, styles.textClr]}>10000</Text>
        </View>
      </View>
      <View style={styles.socialPost}>
        <View style={styles.socialChildShadowBox} />
        <Image
          style={[styles.heartIcon, styles.saminPosition]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <View style={styles.socialPostItem} />
        <Image
          style={[styles.socialPostInner, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.samin, styles.donateTypo]}>Samin</Text>
        <Text style={[styles.ifYouDonate, styles.ifYouDonatePosition]}>
          If you donate blood while fasting, will it break your fast?
        </Text>
        <Text style={[styles.oneCanDonate, styles.donateTypo]}>
          One can donate blood during his fast or after iftar and either of this
          will not nullify his fast. However, he is advised to donate after
          Iftar as the process would require him drink water.
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.socialPost1, styles.socialPosition]}>
        <View style={styles.socialChildShadowBox} />
        <Image
          style={[styles.heartIcon, styles.saminPosition]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <View style={styles.socialPostItem} />
        <Text style={[styles.samin, styles.donateTypo]}>Samin</Text>
        <Text style={[styles.ifYouDonate, styles.ifYouDonatePosition]}>
          If you donate blood while fasting, will it break your fast?
        </Text>
        <Text style={[styles.oneCanDonate, styles.donateTypo]}>
          One can donate blood during his fast or after iftar and either of this
          will not nullify his fast. However, he is advised to donate after
          Iftar as the process would require him drink water.
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.letsIconscommentLight}
          contentFit="cover"
          source={require("../assets/letsiconscommentlight.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
      <View style={[styles.socialPost2, styles.socialPosition]}>
        <View style={styles.socialChildShadowBox} />
        <Image
          style={[styles.heartIcon, styles.saminPosition]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <View style={styles.socialPostItem} />
        <Image
          style={[styles.socialPostInner, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.samin, styles.donateTypo]}>Samin</Text>
        <Text style={[styles.ifYouDonate, styles.ifYouDonatePosition]}>
          If you donate blood while fasting, will it break your fast?
        </Text>
        <Text style={[styles.oneCanDonate, styles.donateTypo]}>
          One can donate blood during his fast or after iftar and either of this
          will not nullify his fast. However, he is advised to donate after
          Iftar as the process would require him drink water.
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.socialsChild, styles.ifYouDonatePosition]} />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </Pressable>
      <Text style={[styles.whatsOnYour, styles.textClr]}>
        What’s on your mind ?
      </Text>
      <Image
        style={styles.underbarButtonsIcon}
        contentFit="cover"
        source={require("../assets/underbar-buttons3.png")}
      />
      <Image
        style={[styles.letsIconscommentLight1, styles.letsPosition]}
        contentFit="cover"
        source={require("../assets/letsiconscommentlight.png")}
      />
      <Image
        style={[styles.letsIconscommentLight2, styles.letsPosition]}
        contentFit="cover"
        source={require("../assets/letsiconscommentlight.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  profileLayout: {
    height: 62,
    position: "absolute",
  },
  pointsLayout: {
    width: 50,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  saminPosition: {
    top: 19,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 34,
    width: 34,
    left: 13,
    position: "absolute",
  },
  donateTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.tajawalRegular,
  },
  ifYouDonatePosition: {
    left: 19,
    position: "absolute",
  },
  socialPosition: {
    left: 8,
    height: 190,
    width: 413,
    position: "absolute",
  },
  letsPosition: {
    left: 334,
    height: 28,
    width: 28,
    position: "absolute",
  },
  huilinDaiYiC35jgxyiUnsplasIcon: {
    top: 1,
    left: -1,
    width: 430,
    position: "absolute",
    height: 932,
  },
  profileChild: {
    left: 131,
    width: 62,
    top: 0,
  },
  abdullahAlMaruf: {
    top: 8,
    color: "#e7e7e7",
    textAlign: "right",
    fontFamily: FontFamily.tajawalRegular,
    fontSize: FontSize.size_base,
    left: 0,
    position: "absolute",
  },
  pointsChild: {
    top: 3,
    height: 16,
    borderRadius: Border.br_xl,
    left: 0,
    width: 50,
  },
  text: {
    left: 7,
    fontSize: FontSize.size_xs,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    textAlign: "center",
    top: 0,
  },
  points: {
    top: 27,
    left: 73,
    height: 21,
  },
  profile: {
    top: 66,
    left: 211,
    width: 193,
  },
  socialChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_base,
    height: 190,
    width: 413,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  heartIcon: {
    left: 367,
    width: 20,
    height: 20,
  },
  socialPostItem: {
    top: 83,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 383,
    height: 90,
    left: 13,
    position: "absolute",
  },
  socialPostInner: {
    top: 12,
  },
  samin: {
    left: 52,
    fontSize: FontSize.size_sm,
    width: 83,
    height: 12,
    textAlign: "left",
    top: 19,
    position: "absolute",
  },
  ifYouDonate: {
    top: 56,
    display: "flex",
    alignItems: "center",
    width: 379,
    height: 26,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.tajawalRegular,
    fontSize: FontSize.size_base,
  },
  oneCanDonate: {
    top: 95,
    left: 21,
    fontSize: FontSize.size_smi,
    width: 368,
    height: 67,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "5.79%",
    width: "2.66%",
    top: "10.53%",
    right: "75.06%",
    bottom: "83.68%",
    left: "22.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  socialPost: {
    top: 635,
    left: 10,
    height: 190,
    width: 413,
    position: "absolute",
  },
  letsIconscommentLight: {
    top: 15,
    left: 326,
    height: 28,
    width: 28,
    position: "absolute",
  },
  ellipseIcon: {
    top: 9,
  },
  socialPost1: {
    top: 237,
  },
  socialPost2: {
    top: 436,
  },
  socialsChild: {
    top: 159,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 4,
    width: 392,
    height: 41,
    borderRadius: Border.br_xl,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    left: 40,
    top: 46,
    width: 40,
    height: 40,
    position: "absolute",
  },
  whatsOnYour: {
    top: 131,
    left: 25,
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  underbarButtonsIcon: {
    marginLeft: -173,
    bottom: 39,
    left: "50%",
    width: 337,
    height: 30,
    position: "absolute",
  },
  letsIconscommentLight1: {
    top: 452,
  },
  letsIconscommentLight2: {
    top: 650,
  },
  socials: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default Socials;
