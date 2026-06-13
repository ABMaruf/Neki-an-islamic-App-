import * as React from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getHadith, getHadithBook } from "../data/duaData";
import { getDuaCategoryById, loadDuaCategories } from "../lib/duaRepository";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";

const DuaRecitation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const type = route.params?.type || "dua";
  const categoryId = route.params?.categoryId || "quranic";
  const bookId = route.params?.bookId || "bukhari";
  const hadithId = route.params?.hadithId;
  const [duaCategories, setDuaCategories] = React.useState([]);
  const book = getHadithBook(bookId);
  const hadith = getHadith(bookId, hadithId);
  const isHadith = type === "hadith";
  const category = getDuaCategoryById(duaCategories, categoryId) || {
    id: categoryId,
    title: "Dua Collection",
    duas: [],
  };

  React.useEffect(() => {
    if (isHadith) return undefined;

    let isMounted = true;
    loadDuaCategories().then((categories) => {
      if (isMounted) {
        setDuaCategories(categories);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [isHadith]);

  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { paddingTop: top }]}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("DuaHadith")}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>{isHadith ? book.banglaTitle : category.title}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {isHadith ? book.title : "Dua Collection"}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {isHadith ? (
          <>
            <View style={styles.darkCard}>
              <Text style={styles.referenceDark}>{hadith.reference}</Text>
              <Text style={styles.arabicDark}>{hadith.arabic}</Text>
              <Text style={styles.transliterationDark}>Hadith no. {hadith.number}</Text>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.infoTitle}>{hadith.title}</Text>
              <Text style={styles.bangla}>{hadith.bangla}</Text>
            </View>
          </>
        ) : (
          <>
            {category.duas.map((item, index) => (
              <View key={item.id} style={styles.duaItemCard}>
                <View style={styles.duaItemHeader}>
                  <View style={styles.duaNumber}>
                    <Text style={styles.duaNumberText}>{index + 1}</Text>
                  </View>
                  <View style={styles.duaTitleWrap}>
                    <Text style={styles.duaItemTitle}>{item.title}</Text>
                    <Text style={styles.referenceLight}>{item.reference}</Text>
                  </View>
                </View>

                <Text style={styles.arabicLight}>{item.arabic}</Text>

                <View style={styles.sectionBlock}>
                  <Text style={styles.sectionLabel}>উচ্চারণ</Text>
                  <Text style={styles.transliterationLight}>{item.transliteration}</Text>
                </View>

                <View style={styles.sectionBlock}>
                  <Text style={styles.sectionLabel}>বাংলা অর্থ</Text>
                  <Text style={styles.bangla}>{item.bangla}</Text>
                </View>

                <View style={styles.noteBlock}>
                  <Text style={styles.noteText}>{item.info}</Text>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: BG,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CARD,
    marginRight: 12,
  },
  backIcon: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 34,
    lineHeight: 36,
  },
  headerCopy: {
    flex: 1,
  },
  kicker: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },
  title: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 24,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  darkCard: {
    borderRadius: 26,
    padding: 20,
    backgroundColor: DARK,
  },
  referenceDark: {
    alignSelf: "flex-start",
    color: "#C9E8DF",
    fontFamily: "Inter-Medium",
    fontSize: 13,
    marginBottom: 14,
  },
  arabicDark: {
    color: "#FFFFFF",
    fontFamily: "Harmattan-Bold",
    fontSize: 34,
    lineHeight: 54,
    textAlign: "right",
    writingDirection: "rtl",
  },
  transliterationDark: {
    color: "rgba(255,255,255,0.78)",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 14,
  },
  duaItemCard: {
    borderRadius: 24,
    padding: 16,
    backgroundColor: CARD,
    marginBottom: 14,
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  duaItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  duaNumber: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF7F3",
    marginRight: 12,
  },
  duaNumberText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  duaTitleWrap: {
    flex: 1,
    minWidth: 0,
  },
  duaItemTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  referenceLight: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 12,
    marginTop: 3,
  },
  arabicLight: {
    color: DARK,
    fontFamily: "Harmattan-Bold",
    fontSize: 32,
    lineHeight: 52,
    textAlign: "right",
    writingDirection: "rtl",
    marginVertical: 6,
  },
  sectionBlock: {
    borderTopWidth: 1,
    borderTopColor: "#ECF2EF",
    paddingTop: 12,
    marginTop: 12,
  },
  sectionLabel: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 12,
    marginBottom: 6,
  },
  transliterationLight: {
    color: "#34403C",
    fontFamily: "Inter-Regular",
    fontSize: 15,
    lineHeight: 23,
  },
  bangla: {
    color: "#34403C",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 17,
    lineHeight: 28,
  },
  noteBlock: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: "#F1F6F3",
    marginTop: 12,
  },
  noteText: {
    color: MUTED,
    fontFamily: "HindSiliguri-Regular",
    fontSize: 14,
    lineHeight: 22,
  },
  infoCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: CARD,
    marginTop: 14,
  },
  infoTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DuaRecitation;
