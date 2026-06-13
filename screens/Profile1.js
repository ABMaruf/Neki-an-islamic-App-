import * as React from "react";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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

const stats = [
  { label: "Points", value: "10k" },
  { label: "Streak", value: "7" },
  { label: "Level", value: "4" },
];

const activity = [
  { title: "Quran Performance", value: "64%", note: "Weekly reading goal" },
  { title: "Hadith Performance", value: "42%", note: "Daily study progress" },
  { title: "Social Activities", value: "18", note: "Answers and posts" },
  { title: "Achievements", value: "6", note: "Badges unlocked" },
];

const Profile1 = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [profile, setProfile] = React.useState({
    username: "Maruf",
    email: "",
  });

  const side = width < 380 ? 16 : 22;
  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;

  React.useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (!user) {
        return;
      }

      const { data: profileRow } = await supabase
        .from("profiles")
        .select("username,email")
        .eq("id", user.id)
        .maybeSingle();

      if (isMounted) {
        setProfile({
          username:
            profileRow?.username ||
            user.user_metadata?.username ||
            user.email?.split("@")[0] ||
            "Maruf",
          email: profileRow?.email || user.email || "",
        });
      }
    };

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Sign out failed", error.message);
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "LogIn" }],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.fixedHeader, { paddingHorizontal: side, paddingTop: top }]}>
        <View style={styles.headerRow}>
          <Pressable style={styles.iconButton} onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.backIcon}
              contentFit="contain"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Text style={styles.pageTitle}>Profile</Text>
          <View style={styles.iconButtonPlaceholder} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingHorizontal: side }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Image
            style={styles.heroImage}
            contentFit="cover"
            source={require("../assets/monaeendravc8wj-kphakunsplash-2.png")}
          />
          <View style={styles.heroTint} />
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profile.username?.charAt(0)?.toUpperCase() || "N"}
            </Text>
          </View>
          <Text style={styles.name} numberOfLines={1}>
            {profile.username}
          </Text>
          <Text style={styles.email} numberOfLines={1}>
            {profile.email || "No email available"}
          </Text>
        </View>

        <View style={styles.statsRow}>
          {stats.map((item) => (
            <View key={item.label} style={styles.statCard}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.sectionHint}>This week</Text>
        </View>

        <View style={styles.activityGrid}>
          {activity.map((item) => (
            <View key={item.title} style={styles.activityCard}>
              <View style={styles.activityTop}>
                <Text style={styles.activityTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.activityValue}>{item.value}</Text>
              </View>
              <Text style={styles.activityNote} numberOfLines={1}>
                {item.note}
              </Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  content: {
    paddingBottom: 28,
  },
  fixedHeader: {
    backgroundColor: BG,
    zIndex: 10,
  },
  headerRow: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CARD,
  },
  iconButtonPlaceholder: {
    width: 42,
  },
  backIcon: {
    width: 22,
    height: 22,
  },
  pageTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 22,
  },
  heroCard: {
    minHeight: 210,
    borderRadius: 28,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
    backgroundColor: DARK,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  heroTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 29, 25, 0.62)",
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9FFF6",
    marginBottom: 14,
  },
  avatarText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 34,
  },
  name: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 27,
    maxWidth: "100%",
  },
  email: {
    marginTop: 5,
    color: "rgba(255,255,255,0.78)",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    maxWidth: "100%",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  statCard: {
    width: "31.5%",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  statValue: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 24,
  },
  statLabel: {
    marginTop: 3,
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 21,
  },
  sectionHint: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 13,
  },
  activityGrid: {
    gap: 10,
  },
  activityCard: {
    borderRadius: 20,
    padding: 16,
    backgroundColor: CARD,
  },
  activityTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activityTitle: {
    flex: 1,
    color: DARK,
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    paddingRight: 10,
  },
  activityValue: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  activityNote: {
    marginTop: 5,
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 13,
  },
  signOutButton: {
    height: 56,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
    marginTop: 18,
  },
  signOutText: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
});

export default Profile1;
