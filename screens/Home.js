import * as React from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";

const posts = [
  {
    author: "Samin",
    meta: "Answered today",
    question: "If you donate blood while fasting, will it break your fast?",
    answer:
      "Donating blood does not nullify the fast. It is better after iftar if the person may feel weak.",
  },
  {
    author: "Ayesha",
    meta: "New reminder",
    question: "What is a simple daily habit to protect prayer focus?",
    answer:
      "Prepare for prayer before the adhan, keep the phone away, and read short meanings before starting.",
  },
  {
    author: "Hamza",
    meta: "Community answer",
    question: "Can I read Quran translation when I am learning Arabic?",
    answer:
      "Yes. Translation helps understanding, while Arabic recitation remains valuable for worship and memorization.",
  },
];

const prayerTimes = [
  { name: "Fajr", time: "4:49", image: require("../assets/fajr-1.png") },
  { name: "Dhuhr", time: "12:06", image: require("../assets/dhuhr-1.png") },
  { name: "Asr", time: "4:28", image: require("../assets/asar-1.png"), active: true },
  { name: "Maghrib", time: "6:09", image: require("../assets/maghbrib-1.png") },
  { name: "Isha", time: "7:24", image: require("../assets/isha-1.png") },
];

const menuItems = [
  { title: "Quran", route: "TheQuran", icon: require("../assets/quran-2.png") },
  { title: "Dua", route: "DuaHadith", icon: require("../assets/dua.png") },
  { title: "Learn", route: "Education", icon: require("../assets/education-1.png") },
  { title: "Compete", route: null, icon: require("../assets/games-1.png") },
  { title: "Goals", route: null, icon: require("../assets/goals-1.png") },
  { title: "Socials", route: "Socials", icon: require("../assets/post-1.png") },
  { title: "Awards", route: "Achievements", icon: require("../assets/achievements-1.png") },
  { title: "Donate", route: null, icon: require("../assets/donate-1.png") },
];

const bottomItems = [
  { title: "Social", route: "Socials", icon: require("../assets/materialsymbolssocialleaderboard.png") },
  { title: "Home", route: null, icon: require("../assets/majesticonshomeline.png"), active: true },
  { title: "Profile", route: "Profile1", icon: require("../assets/ellipse-11.png") },
  { title: "Settings", route: null, icon: require("../assets/magesettingsfill.png") },
];

const Home = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [displayName, setDisplayName] = React.useState("Maruf");
  const [activePost, setActivePost] = React.useState(0);

  const tiny = height < 740;
  const compact = height < 820;
  const side = width < 380 ? 14 : 18;
  const postWidth = width - side * 2;
  const statusTop =
    Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 14 : 10;
  const profileHeight = tiny ? 70 : compact ? 76 : 82;
  const postCardHeight = tiny ? 176 : compact ? 190 : 206;
  const prayerHeight = tiny ? 70 : compact ? 76 : 82;
  const menuHeight = tiny ? 46 : compact ? 50 : 56;
  const bottomHeight = tiny ? 54 : compact ? 58 : 64;
  const prayerCardWidth = width < 380 ? 68 : 74;

  React.useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      const name =
        user?.user_metadata?.username || user?.email?.split("@")[0] || "Maruf";

      if (isMounted) {
        setDisplayName(name);
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const openRoute = (route) => {
    if (route) {
      navigation.navigate(route);
    }
  };

  const onPostScroll = (event) => {
    const page = Math.round(event.nativeEvent.contentOffset.x / postWidth);
    setActivePost(page);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.screen,
          {
            paddingHorizontal: side,
            paddingTop: statusTop,
            paddingBottom: compact ? 8 : 12,
          },
        ]}
      >
        <View style={[styles.profileCard, { height: profileHeight }]}>
          <Image
            style={styles.profileBg}
            contentFit="cover"
            source={require("../assets/darkblueproductbackground-1.png")}
          />
          <View style={styles.profileTint} />
          <View style={styles.profileRow}>
            <View style={styles.nameBlock}>
              <Text style={styles.greeting}>Assalamu Alaikum</Text>
              <Text style={styles.name} numberOfLines={1}>
                {displayName}
              </Text>
            </View>
            <View style={styles.statBoxDark}>
              <Text style={styles.statNumberLight}>10k</Text>
              <Text style={styles.statLabelLight}>points</Text>
            </View>
            <View style={styles.statBoxLight}>
              <Text style={styles.statNumberGreen}>7</Text>
              <Text style={styles.statLabelDark}>streak</Text>
            </View>
            <Pressable style={styles.avatar} onPress={() => openRoute("Profile1")}>
              <Text style={styles.avatarText}>
                {displayName?.charAt(0)?.toUpperCase() || "N"}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.carouselWrap, { height: postCardHeight + 18 }]}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={postWidth}
            decelerationRate="fast"
            onMomentumScrollEnd={onPostScroll}
          >
            {posts.map((post) => (
              <View
                key={post.question}
                style={[styles.postCard, { width: postWidth, height: postCardHeight }]}
              >
                <View style={styles.postHeader}>
                  <View style={styles.authorRow}>
                    <View style={styles.authorAvatar} />
                    <View style={styles.authorCopy}>
                      <Text style={styles.authorName} numberOfLines={1}>
                        {post.author}
                      </Text>
                      <Text style={styles.authorMeta} numberOfLines={1}>
                        {post.meta}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.likeIcon}
                    contentFit="contain"
                    source={require("../assets/heart.png")}
                  />
                </View>
                <Text style={styles.questionText} numberOfLines={2}>
                  {post.question}
                </Text>
                <Text style={styles.answerText} numberOfLines={4}>
                  {post.answer}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.dots}>
            {posts.map((post, index) => (
              <View
                key={post.question}
                style={[styles.dot, index === activePost && styles.activeDot]}
              />
            ))}
          </View>
        </View>

        <View style={styles.progressBlock}>
          <View style={styles.progressHeader}>
            <Text style={styles.sectionTitle}>Daily Progress</Text>
            <Text style={styles.progressValue}>64%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.prayerHeader}>
          <Text style={styles.sectionTitle}>Prayer Timing</Text>
          <Text style={styles.today}>Today</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.prayerList}
          style={[styles.prayerScroller, { height: prayerHeight }]}
        >
          {prayerTimes.map((item) => (
            <View
              key={item.name}
              style={[
                styles.prayerCard,
                { width: prayerCardWidth, height: prayerHeight },
                item.active && styles.activePrayer,
              ]}
            >
              <Image style={styles.prayerImage} contentFit="cover" source={item.image} />
              <Text style={styles.prayerTime}>{item.time}</Text>
              <Text style={styles.prayerName} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <Pressable
              key={item.title}
              style={({ pressed }) => [
                styles.menuButton,
                { height: menuHeight },
                pressed && styles.pressed,
              ]}
              onPress={() => openRoute(item.route)}
            >
              <View style={styles.menuIconBox}>
                <Image style={styles.menuIcon} contentFit="contain" source={item.icon} />
              </View>
              <Text style={styles.menuText} numberOfLines={1}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>

        <View
          style={[
            styles.bottomBar,
            { height: bottomHeight },
          ]}
        >
          {bottomItems.map((item) => (
            <Pressable
              key={item.title}
              style={({ pressed }) => [
                styles.bottomButton,
                item.active && styles.activeBottomButton,
                pressed && styles.pressed,
              ]}
              onPress={() => openRoute(item.route)}
            >
              <Image
                style={[styles.bottomIcon, item.active && styles.activeBottomIcon]}
                contentFit="contain"
                source={item.icon}
              />
              <Text
                style={[styles.bottomText, item.active && styles.activeBottomText]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  screen: {
    flex: 1,
  },
  profileCard: {
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 14,
    justifyContent: "center",
    backgroundColor: DARK,
  },
  profileBg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.48,
  },
  profileTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 27, 24, 0.68)",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameBlock: {
    flex: 1,
    minWidth: 0,
    paddingRight: 8,
  },
  greeting: {
    color: "rgba(255,255,255,0.78)",
    fontFamily: "Inter-Medium",
    fontSize: 11,
    marginBottom: 2,
  },
  name: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 22,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9FFF6",
    marginLeft: 8,
  },
  avatarText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 21,
  },
  statBoxDark: {
    width: 70,
    height: 46,
    borderRadius: 14,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    marginLeft: 8,
  },
  statBoxLight: {
    width: 64,
    height: 46,
    borderRadius: 14,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginLeft: 8,
  },
  statNumberLight: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  statLabelLight: {
    color: "rgba(255,255,255,0.72)",
    fontFamily: "Inter-Regular",
    fontSize: 11,
  },
  statNumberGreen: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  statLabelDark: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
  },
  carouselWrap: {
    marginTop: 8,
  },
  postCard: {
    borderRadius: 20,
    padding: 13,
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.11,
    shadowRadius: 11,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  authorRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  authorAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#15211E",
    marginRight: 10,
  },
  authorCopy: {
    flex: 1,
  },
  authorName: {
    color: DARK,
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
  },
  authorMeta: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
    marginTop: 1,
  },
  likeIcon: {
    width: 22,
    height: 22,
    marginLeft: 12,
  },
  questionText: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 15,
    lineHeight: 20,
  },
  answerText: {
    marginTop: 8,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#F0F3F2",
    color: "#34403C",
    fontFamily: "Inter-Regular",
    fontSize: 12.5,
    lineHeight: 18,
  },
  dots: {
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    flexDirection: "row",
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D1D8D5",
  },
  activeDot: {
    width: 14,
    backgroundColor: GREEN,
  },
  progressBlock: {
    marginTop: 7,
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  sectionTitle: {
    color: "#087868",
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  progressValue: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 15,
  },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "#D8DEDB",
  },
  progressFill: {
    width: "64%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: GREEN,
  },
  prayerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 6,
  },
  today: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 13,
  },
  prayerScroller: {
    flexGrow: 0,
  },
  prayerList: {
    paddingRight: 8,
  },
  prayerCard: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CARD,
    marginRight: 10,
  },
  activePrayer: {
    backgroundColor: "#E5F3EE",
  },
  prayerImage: {
    width: 44,
    height: 44,
    borderRadius: 12,
  },
  prayerTime: {
    position: "absolute",
    top: 29,
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 10,
  },
  prayerName: {
    marginTop: 5,
    maxWidth: "92%",
    color: DARK,
    fontFamily: "Inter-Medium",
    fontSize: 11,
  },
  menuGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  menuButton: {
    width: "48.5%",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  menuIconBox: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF7F4",
    marginRight: 10,
  },
  menuIcon: {
    width: 23,
    height: 23,
  },
  menuText: {
    flex: 1,
    maxWidth: "100%",
    color: DARK,
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
  },
  bottomBar: {
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.13,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
    marginTop: "auto",
  },
  bottomButton: {
    minWidth: 62,
    height: 48,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  activeBottomButton: {
    backgroundColor: "#EAF7F3",
  },
  bottomIcon: {
    width: 20,
    height: 20,
    opacity: 0.72,
    tintColor: "#6B7773",
  },
  activeBottomIcon: {
    opacity: 1,
    tintColor: GREEN,
  },
  bottomText: {
    marginTop: 2,
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 10,
  },
  activeBottomText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
});

export default Home;
