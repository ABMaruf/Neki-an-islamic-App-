import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const TheQuranScrollable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.theQuranScrollable}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </Pressable>
      <ImageBackground
        style={styles.theQuranScrollableInner}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      >
        <ScrollView
          style={styles.surahParent}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.surah}>
            <TouchableOpacity
              style={styles.play}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.alFatihah, styles.anNisaTypo]}>
              Al-Fatihah
            </Text>
            <Text style={[styles.verses, styles.versesTypo]}>7 Verses</Text>
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/heart1.png")}
            />
          </View>
          <View style={[styles.surah1, styles.surahSpaceBlock]}>
            <TouchableOpacity
              style={styles.play}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.alBaqarah, styles.anNisaTypo]}>
              Al-Baqarah
            </Text>
            <Text style={[styles.verses1, styles.versesTypo]}>286 Verses</Text>
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah1, styles.surahSpaceBlock]}>
            <TouchableOpacity
              style={styles.play}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.aaliImran, styles.anNisaTypo]}>
              Aali Imran
            </Text>
            <Text style={[styles.verses2, styles.versesTypo]}>200 Verses</Text>
            <Image
              style={[styles.vectorIcon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <TouchableOpacity
              style={styles.play}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.anNisa, styles.anNisaTypo]}>An-Nisa</Text>
            <Text style={[styles.verses3, styles.versesTypo]}>176 Verses</Text>
            <Image
              style={[styles.vectorIcon2, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.surah3, styles.surahSpaceBlock]}>
            <Pressable
              style={styles.play}
              onPress={() => navigation.navigate("QuranRecitation")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/play1.png")}
              />
            </Pressable>
            <Text style={[styles.alAnan, styles.anNisaTypo]}>Al-An’an</Text>
            <Text style={[styles.verses4, styles.versesTypo]}>165 Verses</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <View style={styles.bottomTabs}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("Socials")}
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/iconoirpost2.png")}
          />
        </Pressable>
        <Image
          style={[styles.materialSymbolssocialLeaderIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolssocialleaderboard.png")}
        />
        <Pressable
          style={[styles.materialSymbolssocialLeaderIcon, styles.iconLayout1]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/majesticonshomeline.png")}
          />
        </Pressable>
        <Image
          style={[styles.materialSymbolssocialLeaderIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/antdesignmessageoutlined3.png")}
        />
        <Image
          style={[styles.materialSymbolssocialLeaderIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/magesettingsfill.png")}
        />
      </View>
      <View style={styles.searchBar}>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Image
          style={[styles.filterSortLinesDescendingIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/filtersortlinesdescendingstreamlineultimatesvg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  anNisaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.tajawalMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  versesTypo: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.tajawalMedium,
    fontWeight: "500",
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  surahSpaceBlock: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  back: {
    left: 22,
    width: 40,
    height: 40,
    zIndex: 0,
    top: 53,
    position: "absolute",
  },
  play: {
    width: 48,
    height: 48,
  },
  alFatihah: {
    marginLeft: 39,
  },
  verses: {
    marginLeft: 39,
  },
  heartIcon: {
    marginLeft: 39,
  },
  surah: {
    paddingHorizontal: 20,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  alBaqarah: {
    marginLeft: 31,
  },
  verses1: {
    marginLeft: 31,
  },
  vectorIcon: {
    marginLeft: 31,
  },
  surah1: {
    width: 402,
  },
  aaliImran: {
    marginLeft: 33,
  },
  verses2: {
    marginLeft: 33,
  },
  vectorIcon1: {
    marginLeft: 33,
  },
  anNisa: {
    marginLeft: 41,
  },
  verses3: {
    marginLeft: 41,
  },
  vectorIcon2: {
    marginLeft: 41,
  },
  surah3: {
    width: 403,
  },
  alAnan: {
    marginLeft: 40,
  },
  verses4: {
    marginLeft: 40,
  },
  vectorIcon3: {
    marginLeft: 40,
  },
  surahParent: {
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden",
    flex: 1,
  },
  theQuranScrollableInner: {
    width: 430,
    height: 729,
    padding: Padding.p_3xs,
    zIndex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  materialSymbolssocialLeaderIcon: {
    marginLeft: 47,
  },
  bottomTabs: {
    top: 870,
    left: 50,
    zIndex: 2,
    flexDirection: "row",
    position: "absolute",
  },
  searchIcon: {
    left: 13,
  },
  filterSortLinesDescendingIcon: {
    left: 360,
  },
  searchBar: {
    left: 81,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 334,
    height: 38,
    zIndex: 3,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 53,
    position: "absolute",
    overflow: "hidden",
  },
  theQuranScrollable: {
    height: 932,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default TheQuranScrollable;
