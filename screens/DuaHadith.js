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
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { hadithBooks } from "../data/duaData";
import { loadDuaCategories } from "../lib/duaRepository";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";

const DuaHadith = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState("hadith");
  const [search, setSearch] = React.useState("");
  const [duaCategories, setDuaCategories] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;

    loadDuaCategories().then((categories) => {
      if (isMounted) {
        setDuaCategories(categories);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;
  const query = search.trim().toLowerCase();
  const filteredCategories = duaCategories.filter((category) => {
    if (!query) return true;
    return (
      category.title.toLowerCase().includes(query) ||
      category.subtitle.toLowerCase().includes(query)
    );
  });
  const filteredHadithBooks = hadithBooks.filter((book) => {
    if (!query) return true;
    return (
      book.title.toLowerCase().includes(query) ||
      book.banglaTitle.includes(search.trim()) ||
      book.subtitle.toLowerCase().includes(query)
    );
  });

  const openCategory = (category) => {
    navigation.navigate("DuaRecitation", {
      type: "dua",
      categoryId: category.id,
      duaId: category.duas[0]?.id,
    });
  };

  const openHadithBook = (book) => {
    navigation.navigate("DuaRecitation", {
      type: "hadith",
      bookId: book.id,
      hadithId: book.hadiths[0]?.id,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { paddingTop: top }]}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>Daily supplications</Text>
          <Text style={styles.title}>Hadith & Dua</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.segment}>
          <Pressable
            style={[styles.segmentButton, mode === "hadith" && styles.activeSegment]}
            onPress={() => setMode("hadith")}
          >
            <Text
              style={[styles.segmentText, mode === "hadith" && styles.activeSegmentText]}
            >
              Hadith
            </Text>
          </Pressable>
          <Pressable
            style={[styles.segmentButton, mode === "dua" && styles.activeSegment]}
            onPress={() => setMode("dua")}
          >
            <Text style={[styles.segmentText, mode === "dua" && styles.activeSegmentText]}>
              Dua
            </Text>
          </Pressable>
        </View>

        <TextInput
          style={styles.search}
          value={search}
          onChangeText={setSearch}
          placeholder={mode === "hadith" ? "Search hadith book" : "Search dua category"}
          placeholderTextColor="#8C9994"
        />

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {mode === "hadith" ? (
            filteredHadithBooks.map((book) => (
              <Pressable
                key={book.id}
                style={({ pressed }) => [styles.bookCard, pressed && styles.pressed]}
                onPress={() => openHadithBook(book)}
              >
                <View style={styles.bookBadge}>
                  <Text style={styles.bookBadgeText}>H</Text>
                </View>
                <View style={styles.bookCopy}>
                  <Text style={styles.categoryTitle} numberOfLines={1}>
                    {book.title}
                  </Text>
                  <Text style={styles.categorySubtitle} numberOfLines={1}>
                    {book.banglaTitle} - {book.subtitle}
                  </Text>
                </View>
                <Text style={styles.openText}>Read</Text>
              </Pressable>
            ))
          ) : (
            <View>
              {filteredCategories.map((category) => (
                <Pressable
                  key={category.id}
                  style={({ pressed }) => [
                    styles.categoryRow,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => openCategory(category)}
                >
                  <View style={styles.iconBox}>
                    <Image
                      style={styles.categoryIcon}
                      contentFit="contain"
                      source={category.icon}
                    />
                  </View>
                  <View style={styles.categoryCopy}>
                    <Text style={styles.categoryTitle} numberOfLines={1}>
                      {category.title}
                    </Text>
                    <Text style={styles.categorySubtitle} numberOfLines={1}>
                      {category.subtitle}
                    </Text>
                  </View>
                  <Text style={styles.countText}>{category.duas.length}</Text>
                </Pressable>
              ))}
            </View>
          )}
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
  search: {
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
    color: DARK,
    fontFamily: "Inter-Regular",
    fontSize: 15,
    backgroundColor: CARD,
    marginTop: 14,
  },
  segment: {
    flexDirection: "row",
    borderRadius: 18,
    padding: 5,
    backgroundColor: "#E8F1EE",
    marginTop: 14,
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
  list: {
    flex: 1,
    marginTop: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
  categoryRow: {
    minHeight: 76,
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    marginBottom: 10,
  },
  bookCard: {
    minHeight: 82,
    borderRadius: 22,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    marginBottom: 12,
  },
  bookBadge: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF7F3",
    marginRight: 12,
  },
  bookBadgeText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  bookCopy: {
    flex: 1,
    minWidth: 0,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF7F3",
    marginRight: 12,
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryCopy: {
    flex: 1,
    minWidth: 0,
  },
  categoryTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  categorySubtitle: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
  countText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 15,
    marginLeft: 10,
  },
  openText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
    marginLeft: 10,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
});

export default DuaHadith;
