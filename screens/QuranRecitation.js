import * as React from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getParaArabic, getSurahWithBangla } from "../lib/quranApi";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";

const QuranRecitation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mode = route.params?.mode || "translation";
  const surahId = route.params?.surahId || 1;
  const paraId = route.params?.paraId || 1;

  const [reader, setReader] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;
  const isHafezi = mode === "hafezi";

  React.useEffect(() => {
    let isMounted = true;

    const loadReader = async () => {
      setLoading(true);
      setError("");

      try {
        const data = isHafezi
          ? await getParaArabic(paraId)
          : await getSurahWithBangla(surahId);

        if (isMounted) {
          setReader(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message || "Unable to load Quran data.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadReader();

    return () => {
      isMounted = false;
    };
  }, [isHafezi, paraId, surahId]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { paddingTop: top }]}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("TheQuran")}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>{isHafezi ? "Hafezi Quran" : "Bangla meaning"}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {reader?.name || (isHafezi ? `Para ${paraId}` : `Surah ${surahId}`)}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Image
            style={styles.heroImage}
            contentFit="cover"
            source={require("../assets/rawanyasseryjoaxx7xcqunsplash-2.png")}
          />
          <View style={styles.heroTint} />
          <Text style={styles.heroArabic} numberOfLines={1}>
            {reader?.arabicName || "القرآن الكريم"}
          </Text>
          <Text style={styles.heroTitle}>
            {isHafezi ? `Para ${paraId}` : `${reader?.verses || ""} ayah`}
          </Text>
        </View>

        {loading ? (
          <View style={styles.stateCard}>
            <ActivityIndicator color={GREEN} />
            <Text style={styles.stateText}>Loading Quran data...</Text>
          </View>
        ) : error ? (
          <View style={styles.stateCard}>
            <Text style={styles.errorTitle}>Could not load Quran</Text>
            <Text style={styles.stateText}>{error}</Text>
          </View>
        ) : isHafezi ? (
          reader.ayahs.map((ayah) => (
            <View key={ayah.globalNumber} style={styles.hafeziCard}>
              <View style={styles.ayahMetaRow}>
                <Text style={styles.ayahMeta}>
                  {ayah.surahName} • Ayah {ayah.number}
                </Text>
              </View>
              <Text style={styles.hafeziArabic}>{ayah.arabic}</Text>
            </View>
          ))
        ) : (
          reader.ayahs.map((ayah) => (
            <View key={ayah.globalNumber} style={styles.ayahCard}>
              <View style={styles.ayahNumber}>
                <Text style={styles.ayahNumberText}>{ayah.number}</Text>
              </View>
              <Text style={styles.arabicText}>{ayah.arabic}</Text>
              <Text style={styles.banglaText}>{ayah.bangla}</Text>
            </View>
          ))
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
  heroCard: {
    minHeight: 150,
    borderRadius: 24,
    overflow: "hidden",
    padding: 18,
    justifyContent: "flex-end",
    backgroundColor: DARK,
    marginBottom: 14,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.45,
  },
  heroTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 26, 23, 0.64)",
  },
  heroArabic: {
    color: "#FFFFFF",
    fontFamily: "Harmattan-Bold",
    fontSize: 34,
    textAlign: "right",
  },
  heroTitle: {
    color: "rgba(255,255,255,0.78)",
    fontFamily: "Inter-Medium",
    fontSize: 14,
    marginTop: 2,
  },
  stateCard: {
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
    backgroundColor: CARD,
  },
  stateText: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    textAlign: "center",
  },
  errorTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  ayahCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: CARD,
    marginBottom: 12,
  },
  ayahNumber: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF7F3",
    marginBottom: 12,
  },
  ayahNumberText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
  },
  arabicText: {
    color: DARK,
    fontFamily: "Harmattan-Bold",
    fontSize: 30,
    lineHeight: 48,
    textAlign: "right",
    writingDirection: "rtl",
  },
  banglaText: {
    color: "#34403C",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 16,
    lineHeight: 26,
    marginTop: 12,
  },
  hafeziCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: CARD,
    marginBottom: 12,
  },
  ayahMetaRow: {
    marginBottom: 10,
  },
  ayahMeta: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },
  hafeziArabic: {
    color: DARK,
    fontFamily: "Harmattan-Bold",
    fontSize: 34,
    lineHeight: 54,
    textAlign: "right",
    writingDirection: "rtl",
  },
});

export default QuranRecitation;
