import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const QuranRecitationSurahInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quranRecitationSurahInfo}>
      <View style={[styles.surah, styles.surahLayout]}>
        <View style={[styles.surahChild, styles.tafsirPosition]} />
        <Image
          style={[styles.rawanYasserYJoaxx7xcqUnsplIcon, styles.tafsirPosition]}
          contentFit="cover"
          source={require("../assets/rawanyasseryjoaxx7xcqunsplash-2.png")}
        />
        <View style={styles.ayaat}>
          <Text style={[styles.text, styles.textTypo]}>
            ُرَتْبٌّالا َوُه َكَئِناَش َّنِإ
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>
            رَحناَو َكِّبَرِل ِّلَصَف
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>
            َرَثْوَكْلٱ َكٰـَنْيَطْعَأ آَّنِإ
          </Text>
        </View>
        <View style={styles.banglaTranslations}>
          <Image
            style={styles.information1Icon}
            contentFit="cover"
            source={require("../assets/information-1.png")}
          />
          <Text style={styles.text3}>{`নিশ্চয়ই আমরা আপনাকে ‘কাওছার’ দান করেছি 
অতএব আপনার প্রভুর উদ্দেশ্যে ছালাত আদায় করুন ও কুরবানী করুন 
নিশ্চয়ই আপনার শত্রুই নির্বংশ।`}</Text>
          <Text style={styles.text4}>সূরা আল-কাওছার</Text>
        </View>
        <Image
          style={styles.akarIconssoundOn}
          contentFit="cover"
          source={require("../assets/akariconssoundon.png")}
        />
      </View>
      <View style={styles.tasfirOption} />
      <View style={styles.bottomTab}>
        <Pressable
          style={styles.iconoirpost}
          onPress={() => navigation.navigate("Socials")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconoirpost3.png")}
          />
        </Pressable>
        <Image
          style={styles.iconoirpost}
          contentFit="cover"
          source={require("../assets/materialsymbolssocialleaderboard2.png")}
        />
        <Pressable
          style={styles.iconoirpost}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/majesticonshomeline2.png")}
          />
        </Pressable>
        <Image
          style={styles.iconoirpost}
          contentFit="cover"
          source={require("../assets/antdesignmessageoutlined2.png")}
        />
        <Image
          style={styles.iconoirpost}
          contentFit="cover"
          source={require("../assets/magesettingsfill2.png")}
        />
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("TheQuran")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  surahLayout: {
    width: 431,
    height: 479,
  },
  tafsirPosition: {
    borderBottomLeftRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.harmattanBold,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    position: "absolute",
  },
  tafsir1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    top: 6,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  surahChild: {
    left: 1,
    backgroundColor: Color.colorGray_100,
    width: 430,
    borderBottomRightRadius: Border.br_3xs,
    height: 479,
  },
  rawanYasserYJoaxx7xcqUnsplIcon: {
    left: 0,
    borderBottomRightRadius: Border.br_3xs,
    height: 479,
    width: 431,
  },
  text: {
    top: 128,
    height: 61,
    textAlign: "left",
    width: 216,
    left: 0,
  },
  text1: {
    top: 61,
    left: 17,
    textAlign: "left",
  },
  text2: {
    left: 5,
    textAlign: "left",
    top: 0,
  },
  ayaat: {
    top: 78,
    left: 108,
    height: 189,
    width: 216,
    position: "absolute",
  },
  information1Icon: {
    top: 137,
    left: 328,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    fontSize: FontSize.size_lg,
    lineHeight: 31,
    display: "flex",
    fontFamily: FontFamily.hindSiliguriRegular,
    width: 377,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  text4: {
    top: 134,
    left: 219,
    textAlign: "right",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.hindSiliguriRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  banglaTranslations: {
    top: 291,
    left: 27,
    height: 158,
    width: 377,
    position: "absolute",
  },
  akarIconssoundOn: {
    top: 257,
    left: 354,
    width: 20,
    height: 20,
    position: "absolute",
  },
  surah: {
    zIndex: 0,
    height: 479,
  },
  tasfirOption: {
    width: 167,
    zIndex: 1,
    marginTop: 16,
    height: 36,
  },
  iconoirpost: {
    width: 30,
    height: 30,
  },
  bottomTab: {
    width: 337,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 3,
    marginTop: 16,
  },
  icon2: {
    overflow: "hidden",
  },
  back: {
    left: 35,
    top: 38,
    width: 40,
    height: 40,
    zIndex: 4,
    position: "absolute",
  },
  quranRecitationSurahInfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
});

export default QuranRecitationSurahInfo;
