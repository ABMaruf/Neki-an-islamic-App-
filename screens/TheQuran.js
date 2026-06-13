import * as React from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { paraList } from "../data/quranData";
import { getSurahList } from "../lib/quranApi";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";

const TheQuran = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState("translation");
  const [search, setSearch] = React.useState("");
  const [surahs, setSurahs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;

  React.useEffect(() => {
    let isMounted = true;

    const loadSurahs = async () => {
      setLoading(true);
      const data = await getSurahList();
      if (isMounted) {
        setSurahs(data);
        setLoading(false);
      }
    };

    loadSurahs();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredSurahs = surahs.filter((surah) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      surah.name.toLowerCase().includes(query) ||
      (surah.banglaName || "").includes(search.trim()) ||
      String(surah.id).includes(query)
    );
  });

  const filteredParas = paraList.filter((para) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      para.name.toLowerCase().includes(query) ||
      para.banglaName.includes(search.trim()) ||
      String(para.id).includes(query)
    );
  });

  const openReader = (params) => {
    navigation.navigate("QuranRecitation", params);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { paddingTop: top }]}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>Read Quran</Text>
          <Text style={styles.title}>The Quran</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.segment}>
          <Pressable
            style={[styles.segmentButton, mode === "translation" && styles.activeSegment]}
            onPress={() => setMode("translation")}
          >
            <Text
              style={[
                styles.segmentText,
                mode === "translation" && styles.activeSegmentText,
              ]}
            >
              Surah
            </Text>
          </Pressable>
          <Pressable
            style={[styles.segmentButton, mode === "hafezi" && styles.activeSegment]}
            onPress={() => setMode("hafezi")}
          >
            <Text
              style={[
                styles.segmentText,
                mode === "hafezi" && styles.activeSegmentText,
              ]}
            >
              Hafezi Para
            </Text>
          </Pressable>
        </View>

        <TextInput
          style={styles.search}
          value={search}
          onChangeText={setSearch}
          placeholder={mode === "translation" ? "Search surah" : "Search para"}
          placeholderTextColor="#8C9994"
        />

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {loading && mode === "translation" ? (
            <View style={styles.stateCard}>
              <Text style={styles.stateTitle}>Loading Quran...</Text>
              <Text style={styles.stateText}>Fetching full Surah list.</Text>
            </View>
          ) : mode === "translation"
            ? filteredSurahs.map((surah) => (
                <Pressable
                  key={surah.id}
                  style={styles.rowCard}
                  onPress={() => openReader({ mode: "translation", surahId: surah.id })}
                >
                  <View style={styles.numberBadge}>
                    <Text style={styles.numberText}>{surah.id}</Text>
                  </View>
                  <View style={styles.rowCopy}>
                    <Text style={styles.rowTitle} numberOfLines={1}>
                      {surah.name}
                    </Text>
                    <Text style={styles.rowSubtitle} numberOfLines={1}>
                      {surah.type} - {surah.verses} ayah
                    </Text>
                  </View>
                  <Text style={styles.arabicName}>{surah.arabicName}</Text>
                </Pressable>
              ))
            : filteredParas.map((para) => (
                <Pressable
                  key={para.id}
                  style={styles.rowCard}
                  onPress={() => openReader({ mode: "hafezi", paraId: para.id })}
                >
                  <View style={styles.numberBadge}>
                    <Text style={styles.numberText}>{para.id}</Text>
                  </View>
                  <View style={styles.rowCopy}>
                    <Text style={styles.rowTitle} numberOfLines={1}>
                      {para.name}
                    </Text>
                    <Text style={styles.rowSubtitle} numberOfLines={1}>
                      {para.banglaName} - {para.range}
                    </Text>
                  </View>
                  <Text style={styles.openText}>Read</Text>
                </Pressable>
              ))}
        </ScrollView>
      </View>
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
    fontSize: 26,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  segment: {
    flexDirection: "row",
    borderRadius: 18,
    padding: 5,
    backgroundColor: "#E8F1EE",
    marginTop: 4,
  },
  segmentButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  activeSegment: {
    backgroundColor: GREEN,
  },
  segmentText: {
    color: MUTED,
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
  },
  activeSegmentText: {
    color: "#FFFFFF",
  },
  search: {
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
    color: DARK,
    fontFamily: "Inter-Regular",
    fontSize: 15,
    backgroundColor: CARD,
    marginTop: 12,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 24,
  },
  rowCard: {
    minHeight: 76,
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    marginBottom: 10,
  },
  numberBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF7F3",
    marginRight: 12,
  },
  numberText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 15,
  },
  rowCopy: {
    flex: 1,
    minWidth: 0,
  },
  rowTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  rowSubtitle: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    marginTop: 4,
  },
  arabicName: {
    color: GREEN,
    fontFamily: "Harmattan-Bold",
    fontSize: 24,
    marginLeft: 10,
  },
  openText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
    marginLeft: 10,
  },
  stateCard: {
    borderRadius: 20,
    padding: 18,
    backgroundColor: CARD,
  },
  stateTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  stateText: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 13,
    marginTop: 5,
  },
});

export default TheQuran;
