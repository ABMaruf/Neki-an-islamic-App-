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
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/native";
import { arabicAlphabet } from "../data/arabicAlphabet";

const GREEN = "#079B73";
const DARK = "#102322";
const MUTED = "#66736E";
const BG = "#F5FAF7";
const CARD = "#FFFFFF";
const SOFT = "#EAF7F3";

const palette = ["#EAF7F3", "#FFF3D7", "#F0ECFF", "#E9F3FF", "#FFECEF", "#EEF8E7"];

const lessons = [
  { id: "alphabet", title: "Alphabet", value: "29 letters" },
  { id: "salah", title: "Salah", value: "Visual guide" },
  { id: "kalima", title: "Kalima", value: "Coming soon" },
  { id: "stories", title: "Stories", value: "Coming soon" },
];

const featureIcons = {
  alphabet: require("../assets/education-1.png"),
  salah: require("../assets/pray.png"),
  kalima: require("../assets/quran-2.png"),
  stories: require("../assets/family.png"),
};

const courseCatalog = {
  alphabet: {
    intro: "Build letter recognition, sound, and examples before moving into reading.",
    chapters: [
      {
        id: "letter-grid",
        title: "Letter Grid",
        lessons: [
          {
            id: "letters",
            title: "All 29 letters",
            body: "Tap each letter, hear the sound, and review one example word.",
            practice: "Find Hamza after Waw and repeat the sound three times.",
            quiz: "Which letter comes after Waw?",
          },
        ],
      },
      {
        id: "recognition",
        title: "Recognition",
        lessons: [
          {
            id: "recognize",
            title: "Letter recognition quiz",
            body: "Match letter shapes with their names and example words.",
            practice: "Choose the correct name when a letter appears.",
            quiz: "What is the name of ء?",
          },
        ],
      },
    ],
  },
  makhraj: {
    intro: "Learn where each sound comes from and compare similar letters.",
    chapters: [
      {
        id: "throat",
        title: "Level 1: throat letters",
        lessons: [
          {
            id: "hamza-alif",
            title: "Alif / Hamzah sound",
            body: "Listen to a clean short sound, then repeat from the throat without stretching.",
            practice: "Tap to practice: ء ا",
            quiz: "True or false: Hamzah has a clear stop sound.",
          },
          {
            id: "ha-ayn",
            title: "Ha and Ayn",
            body: "Compare soft throat flow with the deeper Ayn sound.",
            practice: "Repeat ح ع three times.",
            quiz: "Which one is deeper from the throat?",
          },
        ],
      },
      {
        id: "tongue",
        title: "Level 2: tongue letters",
        lessons: [
          {
            id: "qaf-kaf",
            title: "Qaf and Kaf",
            body: "Hear the back-tongue difference and repeat slowly.",
            practice: "Say ق then ك with a short vowel.",
            quiz: "Which sound is heavier?",
          },
        ],
      },
    ],
  },
  "quran-reading": {
    intro: "Start reading small Arabic words with vowels and joined letters.",
    chapters: [
      {
        id: "harakat",
        title: "Harakat",
        lessons: [
          {
            id: "short-vowels",
            title: "Fatha, kasra, damma",
            body: "Learn the three short vowels and how they change a letter sound.",
            practice: "Read بَ بِ بُ aloud.",
            quiz: "Which mark gives the /i/ sound?",
          },
          {
            id: "tanween",
            title: "Tanween",
            body: "Practice an, in, and un endings on simple words.",
            practice: "Read كِتَابٌ and سَلَامًا.",
            quiz: "Tanween adds which sound?",
          },
        ],
      },
      {
        id: "joining",
        title: "Joining letters",
        lessons: [
          {
            id: "small-words",
            title: "Small-word practice",
            body: "Join letters and vowels into two- and three-letter words.",
            practice: "Read رَبّ and نُور.",
            quiz: "Which letters are joined in نُور?",
          },
        ],
      },
    ],
  },
  tajweed: {
    intro: "Learn the first rules that make recitation correct and beautiful.",
    chapters: [
      {
        id: "madd",
        title: "Madd",
        lessons: [
          {
            id: "madd-natural",
            title: "Natural lengthening",
            body: "Hear two-count madd with ا و ي and practice controlled stretching.",
            practice: "Read قَالَ and نُور.",
            quiz: "Natural madd is usually how many counts?",
          },
        ],
      },
      {
        id: "noon",
        title: "Noon sakinah and tanween",
        lessons: [
          {
            id: "izhar-idgham",
            title: "Izhar and Idgham",
            body: "Compare clear noon with merged noon using short audio examples.",
            practice: "Listen, repeat, then identify the rule.",
            quiz: "Which rule keeps the noon clear?",
          },
          {
            id: "qalqalah",
            title: "Qalqalah",
            body: "Practice the bounce sound on ق ط ب ج د.",
            practice: "Repeat أَحَدْ with a light bounce.",
            quiz: "Which letter has qalqalah?",
          },
        ],
      },
    ],
  },
  wudu: {
    intro: "Learn the required and sunnah steps before Salah.",
    chapters: [
      {
        id: "steps",
        title: "Wudu steps",
        lessons: [
          {
            id: "order",
            title: "Order the steps",
            body: "Start with intention, wash hands, mouth, nose, face, arms, head, ears, and feet.",
            practice: "Review the visual step cards in order.",
            quiz: "Which step comes before washing arms?",
          },
        ],
      },
      {
        id: "mistakes",
        title: "Mistakes and checklist",
        lessons: [
          {
            id: "breakers",
            title: "What breaks wudu",
            body: "Learn the common actions that require renewing wudu.",
            practice: "Mark each scenario as valid or broken.",
            quiz: "Does deep sleep break wudu?",
          },
        ],
      },
    ],
  },
  salah: {
    intro: "Practice prayer positions, rak'ah order, recitation, and meanings.",
    chapters: [
      {
        id: "visual",
        title: "Rak'ah steps",
        lessons: [
          {
            id: "positions",
            title: "Prayer step guide",
            body: "Move through qiyam, ruku, sujud, tashahhud, and salam.",
            practice: "Use the visual guide and listen to each recitation.",
            quiz: "Which position comes after ruku?",
          },
        ],
      },
      {
        id: "checklist",
        title: "Practice checklist",
        lessons: [
          {
            id: "mistakes",
            title: "Common mistakes",
            body: "Review posture, calmness, recitation order, and focus.",
            practice: "Complete the Salah checklist after one prayer.",
            quiz: "Should each position be calm and still?",
          },
        ],
      },
    ],
  },
};

const salahSteps = [
  {
    id: "qiyam",
    title: "Qiyam",
    bangla: "দাঁড়ানো",
    posture: "stand",
    recite: "সানা, সূরা ফাতিহা, এরপর অন্য সূরা",
    arabic: "سُبْحَانَكَ اللَّهُمَّ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    meaning: "হে আল্লাহ, আপনি পবিত্র। সকল প্রশংসা আল্লাহর জন্য, যিনি সকল জগতের রব।",
    tip: "দৃষ্টি সিজদার স্থানে রাখুন এবং শান্তভাবে তিলাওয়াত করুন।",
  },
  {
    id: "ruku",
    title: "Ruku",
    bangla: "রুকু",
    posture: "ruku",
    recite: "সুবহানা রব্বিয়াল আযীম",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    meaning: "আমার মহান রব পবিত্র।",
    tip: "পিঠ সোজা রাখুন, হাত হাঁটুর উপর রাখুন।",
  },
  {
    id: "stand-after-ruku",
    title: "I'tidal",
    bangla: "রুকু থেকে দাঁড়ানো",
    posture: "stand",
    recite: "সামিয়াল্লাহু লিমান হামিদাহ, রব্বানা লাকাল হামদ",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ",
    meaning: "আল্লাহ তাঁর প্রশংসাকারীর কথা শুনেছেন। হে আমাদের রব, আপনার জন্যই সব প্রশংসা।",
    tip: "রুকু থেকে উঠে পুরোপুরি সোজা হয়ে দাঁড়ান।",
  },
  {
    id: "sujud",
    title: "Sujud",
    bangla: "সিজদাহ",
    posture: "sujud",
    recite: "সুবহানা রব্বিয়াল আ'লা",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    meaning: "আমার সর্বোচ্চ রব পবিত্র।",
    tip: "কপাল, নাক, দুই হাত, দুই হাঁটু ও পায়ের আঙুল জমিনে রাখুন।",
  },
  {
    id: "jalsa",
    title: "Jalsa",
    bangla: "দুই সিজদার মাঝে বসা",
    posture: "sit",
    recite: "রব্বিগফিরলী, ওয়ারহামনী, ওয়াহদিনী",
    arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي",
    meaning: "হে আমার রব, আমাকে ক্ষমা করুন, দয়া করুন এবং হেদায়েত দিন।",
    tip: "দুই সিজদার মাঝে স্থির হয়ে বসুন।",
  },
  {
    id: "tashahhud",
    title: "Tashahhud",
    bangla: "শেষ বৈঠক",
    posture: "sit",
    recite: "আত্তাহিয়্যাতু, দরূদ, দোয়া",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
    meaning: "সব সম্মান, ইবাদত ও পবিত্র বাক্য আল্লাহর জন্য।",
    tip: "বৈঠকে ধীরে ধীরে তাশাহহুদ ও দরূদ পড়ুন।",
  },
  {
    id: "salam",
    title: "Salam",
    bangla: "সালাম ফেরানো",
    posture: "salam",
    recite: "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    meaning: "আপনাদের উপর শান্তি এবং আল্লাহর রহমত বর্ষিত হোক।",
    tip: "ডান দিকে, তারপর বাম দিকে সালাম ফিরিয়ে নামাজ শেষ করুন।",
  },
];

const SalahFigure = ({ posture }) => {
  const isRuku = posture === "ruku";
  const isSujud = posture === "sujud";
  const isSit = posture === "sit";
  const isSalam = posture === "salam";

  return (
    <View style={styles.figureStage}>
      <View
        style={[
          styles.figureHead,
          isRuku && styles.rukuHead,
          isSujud && styles.sujudHead,
          isSit && styles.sitHead,
          isSalam && styles.salamHead,
        ]}
      />
      <View
        style={[
          styles.figureBody,
          isRuku && styles.rukuBody,
          isSujud && styles.sujudBody,
          isSit && styles.sitBody,
          isSalam && styles.salamBody,
        ]}
      />
      <View
        style={[
          styles.figureArms,
          isRuku && styles.rukuArms,
          isSujud && styles.sujudArms,
          isSit && styles.sitArms,
        ]}
      />
      <View
        style={[
          styles.figureLegs,
          isRuku && styles.rukuLegs,
          isSujud && styles.sujudLegs,
          isSit && styles.sitLegs,
        ]}
      />
      <View style={styles.prayerMat} />
    </View>
  );
};

const Education = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [mode, setMode] = React.useState("menu");
  const [selected, setSelected] = React.useState(arabicAlphabet[0]);
  const [speaking, setSpeaking] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);

  const top = Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 12 : 12;
  const side = width < 380 ? 14 : 20;
  const cardGap = width < 380 ? 9 : 10;
  const cardWidth = (width - side * 2 - cardGap * 2) / 3;
  const step = salahSteps[activeStep];

  const speak = (text, language = "ar") => {
    Speech.stop();
    Speech.speak(text, {
      language,
      rate: 0.72,
      pitch: 1.05,
      onDone: () => setSpeaking(null),
      onStopped: () => setSpeaking(null),
      onError: () => setSpeaking(null),
    });
  };

  const stopSpeech = () => {
    Speech.stop();
    setSpeaking(null);
  };

  const speakLetter = (item) => {
    if (speaking === item.letter) {
      stopSpeech();
      return;
    }

    setSelected(item);
    setSpeaking(item.letter);
    speak(item.letter, "ar");
  };

  const speakSalah = () => {
    if (speaking === step.id) {
      stopSpeech();
      return;
    }

    setSpeaking(step.id);
    speak(step.arabic, "ar");
  };

  const openFeature = (id) => {
    if (id === "alphabet" || id === "salah") {
      setMode(id);
    }
  };

  const goStep = (direction) => {
    setActiveStep((current) => (current + direction + salahSteps.length) % salahSteps.length);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { paddingTop: top, paddingHorizontal: side }]}>
        <Pressable
          style={styles.backButton}
          onPress={() => (mode === "menu" ? navigation.navigate("Home") : setMode("menu"))}
        >
          <Text style={styles.backIcon}>{"<"}</Text>
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>
            {mode === "menu" ? "Learn" : mode === "alphabet" ? "Learn Arabic" : "Learn Salah"}
          </Text>
          <Text style={styles.title}>
            {mode === "menu"
              ? "Choose a Feature"
              : mode === "alphabet"
              ? "Arabic Alphabet"
              : "Salah Visual Guide"}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, { paddingHorizontal: side }]}
        showsVerticalScrollIndicator={false}
      >
        {mode === "menu" ? (
          <>
            <View style={styles.featureGrid}>
              {lessons.map((lesson) => {
                const enabled = lesson.id === "alphabet" || lesson.id === "salah";
                return (
                  <Pressable
                    key={lesson.id}
                    style={({ pressed }) => [
                      styles.featureCard,
                      !enabled && styles.disabledFeature,
                      pressed && enabled && styles.pressed,
                    ]}
                    onPress={() => openFeature(lesson.id)}
                  >
                    <View style={styles.featureIconBox}>
                      <Image
                        style={styles.featureIcon}
                        contentFit="contain"
                        source={featureIcons[lesson.id]}
                      />
                    </View>
                    <View style={styles.featureCopy}>
                      <Text style={styles.featureTitle}>{lesson.title}</Text>
                      <Text style={styles.featureValue}>{lesson.value}</Text>
                    </View>
                    <Text style={[styles.featureAction, !enabled && styles.disabledFeatureText]}>
                      {enabled ? "Open" : "Soon"}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        ) : (
          <>
        {mode === "alphabet" ? (
          <View style={styles.hero}>
            <Image
              style={styles.heroBg}
              contentFit="cover"
              source={require("../assets/rawanyasseryjoaxx7xcqunsplash-2.png")}
            />
            <View style={styles.heroTint} />
            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroLabel}>Tap a letter</Text>
                <Text style={styles.heroTitle}>Listen, read, repeat</Text>
              </View>
              <Pressable style={styles.playButton} onPress={() => speakLetter(selected)}>
                {speaking === selected.letter ? (
                  <View style={styles.stopIcon} />
                ) : (
                  <Image
                    style={styles.playImage}
                    contentFit="contain"
                    source={require("../assets/play.png")}
                  />
                )}
              </Pressable>
            </View>
            <View style={styles.selectedRow}>
              <Text style={styles.selectedLetter}>{selected.letter}</Text>
              <View style={styles.selectedCopy}>
                <Text style={styles.selectedName}>{selected.name}</Text>
                <Text style={styles.selectedBangla}>উচ্চারণ: {selected.bangla}</Text>
                <Text style={styles.selectedExample}>
                  {selected.example} - {selected.meaning}
                </Text>
              </View>
            </View>
          </View>
        ) : mode === "salah" ? (
          <View style={styles.salahHero}>
            <View style={styles.salahHeroTop}>
              <View>
                <Text style={styles.heroLabelDark}>Step {activeStep + 1} of {salahSteps.length}</Text>
                <Text style={styles.salahHeroTitle}>{step.title}</Text>
                <Text style={styles.salahBangla}>{step.bangla}</Text>
              </View>
              <Pressable style={styles.salahPlayButton} onPress={speakSalah}>
                {speaking === step.id ? (
                  <View style={styles.salahStopIcon} />
                ) : (
                  <Image
                    style={styles.salahPlayIcon}
                    contentFit="contain"
                    source={require("../assets/play.png")}
                  />
                )}
              </Pressable>
            </View>

            <View style={styles.figureWrap}>
              <Pressable
                style={[styles.stepNavButton, styles.stepNavLeft]}
                onPress={() => goStep(-1)}
              >
                <Text style={styles.stepNavText}>{"<"}</Text>
              </Pressable>
              <SalahFigure posture={step.posture} />
              <Pressable
                style={[styles.stepNavButton, styles.stepNavRight]}
                onPress={() => goStep(1)}
              >
                <Text style={styles.stepNavText}>{">"}</Text>
              </Pressable>
            </View>
          </View>
        ) : null}

        {mode === "alphabet" ? (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Letters</Text>
              <Text style={styles.sectionMeta}>{arabicAlphabet.length} total</Text>
            </View>

            <View style={[styles.grid, { columnGap: cardGap }]}>
              {arabicAlphabet.map((item, index) => {
                const active = selected.letter === item.letter;
                return (
                  <Pressable
                    key={item.letter}
                    style={({ pressed }) => [
                      styles.letterCard,
                      {
                        width: cardWidth,
                        backgroundColor: active ? DARK : palette[index % palette.length],
                      },
                      pressed && styles.pressed,
                    ]}
                    onPress={() => speakLetter(item)}
                  >
                    <View style={[styles.soundDot, active && styles.activeSoundDot]}>
                      <Text style={[styles.soundText, active && styles.activeSoundText]}>
                        {speaking === item.letter ? "..." : "♪"}
                      </Text>
                    </View>
                    <Text style={[styles.letter, active && styles.activeLetter]}>
                      {item.letter}
                    </Text>
                    <Text style={[styles.banglaName, active && styles.activeCardText]}>
                      {item.bangla}
                    </Text>
                    <Text
                      style={[styles.example, active && styles.activeCardMuted]}
                      numberOfLines={1}
                    >
                      {item.example}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        ) : mode === "salah" ? (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Salah Steps</Text>
              <Text style={styles.sectionMeta}>Visual guide</Text>
            </View>

            <View style={styles.reciteCard}>
              <Text style={styles.reciteLabel}>What to recite</Text>
              <Text style={styles.reciteArabic}>{step.arabic}</Text>
              <Text style={styles.reciteBangla}>{step.recite}</Text>
              <Text style={styles.reciteMeaning}>{step.meaning}</Text>
              <Text style={styles.reciteTip}>{step.tip}</Text>
            </View>

            <View style={styles.stepList}>
              {salahSteps.map((item, index) => {
                const active = activeStep === index;
                return (
                  <Pressable
                    key={item.id}
                    style={[styles.stepRow, active && styles.activeStepRow]}
                    onPress={() => setActiveStep(index)}
                  >
                    <View style={[styles.stepNumber, active && styles.activeStepNumber]}>
                      <Text style={[styles.stepNumberText, active && styles.activeStepNumberText]}>
                        {index + 1}
                      </Text>
                    </View>
                    <View style={styles.stepCopy}>
                      <Text style={[styles.stepTitle, active && styles.activeStepTitle]}>
                        {item.title}
                      </Text>
                      <Text style={styles.stepBangla}>{item.bangla}</Text>
                    </View>
                    <Text style={[styles.stepAction, active && styles.activeStepAction]}>
                      View
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        ) : null}
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
    fontSize: 25,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 26,
  },
  learnSummary: {
    minHeight: 118,
    borderRadius: 26,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: DARK,
    marginBottom: 14,
  },
  summaryKicker: {
    color: "#BCEBDE",
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  summaryTitle: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 23,
    marginTop: 5,
  },
  summaryText: {
    color: "rgba(255,255,255,0.72)",
    fontFamily: "Inter-Regular",
    fontSize: 13,
    marginTop: 6,
  },
  streakBadge: {
    width: 86,
    height: 78,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  streakValue: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 28,
  },
  streakLabel: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
    marginTop: 2,
  },
  featureGrid: {
    gap: 12,
    paddingTop: 2,
  },
  featureCard: {
    minHeight: 92,
    borderRadius: 24,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  disabledFeature: {
    opacity: 0.58,
  },
  featureIconBox: {
    width: 58,
    height: 58,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SOFT,
    marginRight: 14,
  },
  featureIcon: {
    width: 36,
    height: 36,
  },
  featureCopy: {
    flex: 1,
  },
  featureTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 18,
    flex: 1,
  },
  featureTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  difficultyTag: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: SOFT,
  },
  featureValue: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 13,
    marginTop: 4,
  },
  featureAction: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
  },
  cardProgressTrack: {
    height: 7,
    borderRadius: 999,
    backgroundColor: "#DCE8E3",
    marginTop: 10,
    overflow: "hidden",
  },
  cardProgressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: GREEN,
  },
  lessonCount: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
    marginTop: 6,
  },
  disabledFeatureText: {
    color: MUTED,
  },
  courseOverview: {
    gap: 14,
  },
  courseHero: {
    borderRadius: 26,
    padding: 18,
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  courseIconBox: {
    width: 64,
    height: 64,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SOFT,
  },
  courseIcon: {
    width: 42,
    height: 42,
  },
  courseTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 26,
    marginTop: 14,
  },
  courseSubtitle: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 15,
    marginTop: 3,
  },
  courseIntro: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
  },
  courseStatsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  courseStat: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#F1F7F4",
  },
  courseStatValue: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
  courseStatLabel: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
    marginTop: 3,
  },
  chapterList: {
    gap: 10,
  },
  chapterCard: {
    minHeight: 84,
    borderRadius: 22,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
  },
  lessonRowCard: {
    minHeight: 82,
    borderRadius: 22,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
  },
  chapterNumber: {
    width: 44,
    height: 44,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SOFT,
    marginRight: 12,
  },
  chapterNumberText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  chapterCopy: {
    flex: 1,
  },
  chapterTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  chapterMeta: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    marginTop: 3,
  },
  chapterAction: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  primaryCourseButton: {
    minHeight: 58,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
    marginTop: 4,
  },
  primaryCourseText: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 15,
  },
  lessonDetail: {
    gap: 14,
  },
  lessonHeroCard: {
    borderRadius: 26,
    padding: 18,
    backgroundColor: DARK,
  },
  lessonHeroKicker: {
    color: "#BCEBDE",
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  lessonHeroTitle: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 25,
    marginTop: 7,
  },
  lessonHeroBody: {
    color: "rgba(255,255,255,0.78)",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
  },
  lessonBlock: {
    borderRadius: 22,
    padding: 16,
    backgroundColor: CARD,
  },
  lessonBlockLabel: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  lessonBlockText: {
    color: DARK,
    fontFamily: "Inter-Regular",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 7,
  },
  smallPlayButton: {
    height: 42,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SOFT,
    marginTop: 12,
  },
  smallPlayIcon: {
    width: 15,
    height: 15,
    tintColor: GREEN,
    marginRight: 8,
  },
  smallPlayText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
  },
  quizChoiceRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  quizChoice: {
    flex: 1,
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: "#F1F7F4",
  },
  hero: {
    minHeight: 230,
    borderRadius: 26,
    overflow: "hidden",
    padding: 18,
    justifyContent: "space-between",
    backgroundColor: DARK,
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.45,
  },
  heroTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 29, 25, 0.72)",
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroLabel: {
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter-Medium",
    fontSize: 13,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 25,
    marginTop: 3,
  },
  playButton: {
    minWidth: 54,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
  },
  playIcon: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 13,
  },
  playImage: {
    width: 18,
    height: 18,
    tintColor: GREEN,
  },
  stopIcon: {
    width: 15,
    height: 15,
    borderRadius: 3,
    backgroundColor: GREEN,
  },
  selectedRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 26,
  },
  selectedLetter: {
    width: 112,
    height: 112,
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    color: GREEN,
    fontFamily: "Harmattan-Bold",
    fontSize: 86,
    lineHeight: 122,
    textAlign: "center",
    marginLeft: 14,
  },
  selectedCopy: {
    flex: 1,
  },
  selectedName: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 22,
  },
  selectedBangla: {
    color: "#DDF7EE",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 17,
    lineHeight: 25,
    marginTop: 4,
  },
  selectedExample: {
    color: "rgba(255,255,255,0.78)",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 14,
    marginTop: 8,
  },
  lessonStrip: {
    paddingVertical: 14,
  },
  lessonPill: {
    minWidth: 116,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: CARD,
    marginRight: 10,
  },
  activeLessonPill: {
    backgroundColor: SOFT,
  },
  lessonTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  activeLessonTitle: {
    color: GREEN,
  },
  lessonValue: {
    color: MUTED,
    fontFamily: "Inter-Regular",
    fontSize: 11,
    marginTop: 3,
  },
  activeLessonValue: {
    color: "#47786A",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 22,
  },
  sectionMeta: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 13,
  },
  grid: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    rowGap: 10,
  },
  letterCard: {
    height: 142,
    borderRadius: 24,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#143A33",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  soundDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.72)",
  },
  activeSoundDot: {
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  soundText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  activeSoundText: {
    color: "#FFFFFF",
  },
  letter: {
    color: DARK,
    fontFamily: "Harmattan-Bold",
    fontSize: 58,
    lineHeight: 72,
  },
  activeLetter: {
    color: "#FFFFFF",
  },
  banglaName: {
    color: DARK,
    fontFamily: "HindSiliguri-Regular",
    fontSize: 17,
    lineHeight: 24,
  },
  activeCardText: {
    color: "#FFFFFF",
  },
  example: {
    color: MUTED,
    fontFamily: "Harmattan-Bold",
    fontSize: 20,
    marginTop: 1,
  },
  activeCardMuted: {
    color: "rgba(255,255,255,0.75)",
  },
  salahHero: {
    borderRadius: 26,
    padding: 16,
    backgroundColor: CARD,
    shadowColor: "#143A33",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 7 },
    elevation: 3,
  },
  salahHeroTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroLabelDark: {
    color: MUTED,
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },
  salahHeroTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 26,
    marginTop: 3,
  },
  salahBangla: {
    color: GREEN,
    fontFamily: "HindSiliguri-Regular",
    fontSize: 17,
    marginTop: 2,
  },
  salahPlayButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DARK,
  },
  salahPlayIcon: {
    width: 18,
    height: 18,
    tintColor: "#FFFFFF",
  },
  salahStopIcon: {
    width: 15,
    height: 15,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },
  figureWrap: {
    position: "relative",
  },
  figureStage: {
    height: 210,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F7F4",
    marginTop: 14,
    overflow: "hidden",
  },
  figureHead: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: GREEN,
    marginBottom: 6,
  },
  figureBody: {
    width: 50,
    height: 78,
    borderRadius: 24,
    backgroundColor: DARK,
  },
  figureArms: {
    position: "absolute",
    top: 95,
    width: 98,
    height: 12,
    borderRadius: 8,
    backgroundColor: "#2D4B45",
  },
  figureLegs: {
    width: 70,
    height: 44,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: "#47645E",
    marginTop: 4,
  },
  rukuHead: {
    transform: [{ translateY: 34 }, { translateX: -42 }],
  },
  rukuBody: {
    width: 92,
    height: 38,
    transform: [{ translateY: 28 }],
  },
  rukuArms: {
    top: 126,
    width: 84,
    transform: [{ translateX: 30 }, { rotate: "-18deg" }],
  },
  rukuLegs: {
    height: 72,
    width: 44,
    transform: [{ translateY: 25 }, { translateX: 34 }],
  },
  sujudHead: {
    transform: [{ translateY: 72 }, { translateX: -48 }],
  },
  sujudBody: {
    width: 116,
    height: 34,
    transform: [{ translateY: 70 }],
  },
  sujudArms: {
    top: 143,
    width: 95,
  },
  sujudLegs: {
    width: 90,
    height: 34,
    transform: [{ translateY: 70 }, { translateX: 48 }],
  },
  sitHead: {
    transform: [{ translateY: 22 }],
  },
  sitBody: {
    height: 58,
    transform: [{ translateY: 20 }],
  },
  sitArms: {
    top: 119,
    width: 82,
  },
  sitLegs: {
    width: 112,
    height: 28,
    transform: [{ translateY: 20 }],
  },
  salamHead: {
    transform: [{ rotate: "18deg" }],
  },
  salamBody: {
    transform: [{ rotate: "4deg" }],
  },
  prayerMat: {
    position: "absolute",
    bottom: 16,
    width: "72%",
    height: 18,
    borderRadius: 999,
    backgroundColor: "rgba(7,155,115,0.18)",
  },
  stepNavButton: {
    position: "absolute",
    top: 95,
    zIndex: 4,
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#143A33",
    shadowOpacity: 0.12,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  stepNavLeft: {
    left: 10,
  },
  stepNavRight: {
    right: 10,
  },
  stepNavText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 24,
    lineHeight: 26,
  },
  reciteCard: {
    borderRadius: 22,
    padding: 16,
    backgroundColor: DARK,
    marginBottom: 12,
  },
  reciteLabel: {
    color: "#BCEBDE",
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  reciteArabic: {
    color: "#FFFFFF",
    fontFamily: "Harmattan-Bold",
    fontSize: 31,
    lineHeight: 45,
    textAlign: "right",
    writingDirection: "rtl",
    marginTop: 8,
  },
  reciteBangla: {
    color: "#EAF7F3",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  reciteMeaning: {
    color: "#BCEBDE",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
  },
  reciteTip: {
    color: "rgba(255,255,255,0.72)",
    fontFamily: "HindSiliguri-Regular",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  stepList: {
    gap: 10,
  },
  stepRow: {
    minHeight: 74,
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
  },
  activeStepRow: {
    backgroundColor: SOFT,
  },
  stepNumber: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF4F1",
    marginRight: 12,
  },
  activeStepNumber: {
    backgroundColor: GREEN,
  },
  stepNumberText: {
    color: GREEN,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  activeStepNumberText: {
    color: "#FFFFFF",
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    color: DARK,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  activeStepTitle: {
    color: GREEN,
  },
  stepBangla: {
    color: MUTED,
    fontFamily: "HindSiliguri-Regular",
    fontSize: 14,
    marginTop: 2,
  },
  stepAction: {
    color: MUTED,
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  activeStepAction: {
    color: GREEN,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
});

export default Education;
