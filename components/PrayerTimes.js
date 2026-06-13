import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const PrayerTimes = () => {
  return (
    <View style={styles.prayerTimes}>
      <View style={styles.topBarParent}>
        <View style={styles.topBar}>
          <Text style={[styles.prayerTimes1, styles.monthYearTypo]}>
            Prayer Times
          </Text>
          <View style={[styles.currentLocationParent, styles.parentFlexBox]}>
            <Text style={styles.currentLocation}>Current Location</Text>
            <View
              style={[styles.dhakaDistrictWrapper, styles.sunriseParentFlexBox]}
            >
              <Text style={styles.currentLocation}>Dhaka District</Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={[styles.prayer, styles.prayerSpaceBlock]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.prayerScrollViewContent}
        >
          <View style={styles.fajr}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.sunriseParentFlexBox}>
                <Image
                  style={styles.sunriseIcon}
                  contentFit="cover"
                  source={require("../assets/sunrise.png")}
                />
                <Text style={[styles.fajr1, styles.amTypo]}>Fajr</Text>
              </View>
              <View style={styles.sunriseParentFlexBox}>
                <Text style={styles.amTypo}>04:23 AM</Text>
                <Image
                  style={[styles.alarmOnIcon, styles.alarmIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/alarm-on.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dhuhr, styles.asrShadowBox]}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.sunriseParentFlexBox}>
                <Image
                  style={styles.noonIcon}
                  contentFit="cover"
                  source={require("../assets/noon.png")}
                />
                <Text style={[styles.fajr1, styles.amTypo]}>Dhuhr</Text>
              </View>
              <View style={styles.sunriseParentFlexBox}>
                <Text style={styles.amTypo}>04:23 AM</Text>
                <Image
                  style={[styles.alarmOffIcon, styles.alarmIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/alarm-off.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.asr, styles.asrShadowBox]}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.sunriseParentFlexBox}>
                <Image
                  style={styles.afternoonIcon}
                  contentFit="cover"
                  source={require("../assets/afternoon.png")}
                />
                <Text style={[styles.fajr1, styles.amTypo]}>Asr</Text>
              </View>
              <View style={styles.sunriseParentFlexBox}>
                <Text style={styles.amTypo}>04:23 AM</Text>
                <Image
                  style={[styles.alarmOffIcon, styles.alarmIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/alarm-off.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.maghrib, styles.asrShadowBox]}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.sunriseParentFlexBox}>
                <Image
                  style={styles.afternoonIcon}
                  contentFit="cover"
                  source={require("../assets/evening.png")}
                />
                <Text style={[styles.fajr1, styles.amTypo]}>Maghrib</Text>
              </View>
              <View style={styles.sunriseParentFlexBox}>
                <Text style={styles.amTypo}>04:23 AM</Text>
                <Image
                  style={[styles.alarmOffIcon, styles.alarmIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/alarm-off.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.isha, styles.asrShadowBox]}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.sunriseParentFlexBox}>
                <Image
                  style={styles.sunriseIcon}
                  contentFit="cover"
                  source={require("../assets/night.png")}
                />
                <Text style={[styles.fajr1, styles.amTypo]}>Isha</Text>
              </View>
              <View style={styles.sunriseParentFlexBox}>
                <Text style={styles.amTypo}>04:23 AM</Text>
                <Image
                  style={[styles.alarmOffIcon, styles.alarmIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/alarm-off.png")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.calender, styles.date17SpaceBlock]}>
          <View style={[styles.monthYearLine, styles.lineFlexBox]}>
            <Image
              style={styles.chevronIconLayout}
              contentFit="cover"
              source={require("../assets/chevronleft.png")}
            />
            <Text style={[styles.monthYear, styles.monthYearTypo]}>
              Month year
            </Text>
            <Image
              style={[styles.chevronRightIcon, styles.chevronIconLayout]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <View style={styles.calenderChild} />
          <View style={styles.dayDate}>
            <View style={[styles.dayLine, styles.lineFlexBox]}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
              <View style={[styles.day2, styles.dayFlexBox]}>
                <Text style={[styles.day1, styles.day1Typo]}>Day</Text>
              </View>
            </View>
            <View style={styles.dateLine}>
              <View style={[styles.dateNumberLine1, styles.lineFlexBox]}>
                <View style={styles.dateFlexBox}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
              </View>
              <View style={[styles.dateNumberLine1, styles.lineFlexBox]}>
                <View style={styles.dateFlexBox}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
              </View>
              <View style={[styles.dateNumberLine1, styles.lineFlexBox]}>
                <View style={styles.dateFlexBox}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date17, styles.date17SpaceBlock]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
              </View>
              <View style={[styles.dateNumberLine1, styles.lineFlexBox]}>
                <View style={styles.dateFlexBox}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
              </View>
              <View style={[styles.dateNumberLine1, styles.lineFlexBox]}>
                <View style={styles.dateFlexBox}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text, styles.day1Typo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.underbarButtons, styles.parentFlexBox]}>
        <Image
          style={styles.sunriseIcon}
          contentFit="cover"
          source={require("../assets/quran.png")}
        />
        <Image
          style={styles.sunriseIcon}
          contentFit="cover"
          source={require("../assets/quiz.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <Image
          style={styles.sunriseIcon}
          contentFit="cover"
          source={require("../assets/socials.png")}
        />
        <Image
          style={styles.sunriseIcon}
          contentFit="cover"
          source={require("../assets/settings.png")}
        />
      </View>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prayerScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  monthYearTypo: {
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  sunriseParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  prayerSpaceBlock: {
    marginTop: 17,
    overflow: "hidden",
  },
  amTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
  },
  alarmIconSpaceBlock: {
    marginLeft: 3,
    width: 30,
  },
  asrShadowBox: {
    marginTop: 20,
    paddingHorizontal: Padding.p_4xs,
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  date17SpaceBlock: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  lineFlexBox: {
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  chevronIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  day1Typo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  dayFlexBox: {
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    flex: 1,
    alignItems: "center",
  },
  dateFlexBox: {
    height: 42,
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  prayerTimes1: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  currentLocation: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  dhakaDistrictWrapper: {
    backgroundColor: "#00573d",
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  currentLocationParent: {
    paddingHorizontal: Padding.p_16xl,
    marginTop: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  topBar: {
    width: 397,
    paddingHorizontal: 0,
    paddingVertical: 15,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSeagreen_200,
    alignItems: "center",
  },
  sunriseIcon: {
    height: 30,
    width: 30,
  },
  fajr1: {
    marginLeft: 10,
  },
  alarmOnIcon: {
    height: 30,
  },
  frameParent: {
    flex: 1,
  },
  fajr: {
    paddingHorizontal: Padding.p_4xs,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSeagreen_100,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  noonIcon: {
    height: 25,
    width: 24,
  },
  alarmOffIcon: {
    height: 33,
  },
  dhuhr: {
    paddingVertical: 0,
  },
  afternoonIcon: {
    height: 29,
    width: 30,
  },
  asr: {
    paddingVertical: 0,
  },
  maghrib: {
    paddingVertical: 0,
  },
  isha: {
    height: 37,
    paddingVertical: Padding.p_mid,
  },
  prayer: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    flex: 1,
    alignSelf: "stretch",
  },
  monthYear: {
    fontFamily: FontFamily.latoBold,
    textAlign: "center",
    marginLeft: 10,
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    flex: 1,
  },
  chevronRightIcon: {
    marginLeft: 10,
  },
  monthYearLine: {
    paddingVertical: Padding.p_base,
  },
  calenderChild: {
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    width: 356,
    height: 1,
    marginTop: 10,
  },
  day1: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    lineHeight: 12,
    textTransform: "uppercase",
    textAlign: "left",
  },
  day2: {
    marginLeft: 11,
  },
  dayLine: {
    paddingVertical: Padding.p_5xs,
  },
  text: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textAlign: "center",
  },
  date1: {
    marginLeft: 10,
  },
  dateNumberLine1: {
    paddingVertical: Padding.p_9xs,
  },
  date17: {
    borderRadius: 100,
    height: 33,
    marginLeft: 10,
    backgroundColor: Color.colorSeagreen_100,
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
  },
  dateLine: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  dayDate: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  calender: {
    marginTop: 17,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorSeagreen_200,
  },
  topBarParent: {
    zIndex: 0,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  homeIcon: {
    height: 26,
    width: 30,
  },
  underbarButtons: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    zIndex: 1,
    alignSelf: "stretch",
  },
  backIcon: {
    position: "absolute",
    top: 7,
    left: 2,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  prayerTimes: {
    backgroundColor: "#ebe6b6",
    width: 393,
    height: 852,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default PrayerTimes;
