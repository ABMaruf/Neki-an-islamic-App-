import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Linking,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const EducationTopic = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.educationTopicIcon, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/educationtopic.png")}
    >
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Education")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </Pressable>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={styles.frameChild} />
          </View>
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <Text style={styles.pilgrimageHajjEveryContainer}>
              <Text style={styles.pilgrimageHajj}>{`Pilgrimage (hajj): 
`}</Text>
              <Text style={styles.everyMuslimWhoseHealthAnd}>
                <Text style={styles.blankLine}> </Text>
                <Text style={styles.everyMuslimWhoseHealthAnd1}>
                  {`Every Muslim whose health and finances permit it must make at least one visit to the holy city of Mecca, in present-day Saudi Arabia. 

The `}
                </Text>
              </Text>
              <Text style={styles.everyMuslimWhoseHealthAnd}>
                <Text style={styles.everyMuslimWhoseHealthAnd1}>
                  <Text style={styles.kaba2}>Ka'ba</Text>
                </Text>
              </Text>
              <Text style={styles.everyMuslimWhoseHealthAnd}>
                <Text style={styles.everyMuslimWhoseHealthAnd1}>
                  {`, a cubical structure covered in black embroidered hangings, is at the center of the Haram Mosque in Mecca. 

Muslims believe that it is the house Abraham (Ibrahim in Arabic) built for God, and face in its direction (`}
                </Text>
              </Text>
              <Text style={styles.everyMuslimWhoseHealthAnd}>
                <Text style={styles.everyMuslimWhoseHealthAnd1}>
                  <Text style={styles.kaba2}>qibla</Text>
                </Text>
              </Text>
              <Text style={styles.everyMuslimWhoseHealthAnd}>
                <Text style={styles.everyMuslimWhoseHealthAnd1}>
                  {`) when they pray. 

Since the time of the Prophet Muhammad, believers from all over the world have gathered around the Ka'ba in Mecca on the eighth and twelfth days of the final month of the Islamic calendar.

It is required of every Muslim to perform Hajj at least once in their lifetime. However, the Hajj is not intended as a burden upon Muslims, and Muslims are only required to perform Hajj so long as it is within their capacity.`}
                </Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.frameItem} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    width: 40,
    height: 40,
  },
  frameIcon: {
    top: 759,
    height: 30,
    width: 792,
    left: -191,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(201, 201, 201, 0.14)",
    height: 737,
    width: 410,
  },
  frame2: {
    width: 601,
  },
  frame1: {
    top: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    width: 792,
    left: -191,
    position: "absolute",
  },
  pilgrimageHajj: {
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
  },
  blankLine: {
    fontWeight: "300",
    fontFamily: FontFamily.tajawalLight,
  },
  everyMuslimWhoseHealthAnd1: {
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
  },
  everyMuslimWhoseHealthAnd: {
    fontSize: FontSize.size_xl,
  },
  kaba2: {
    textDecorationLine: "underline",
  },
  pilgrimageHajjEveryContainer: {
    color: Color.colorWhite,
    textAlign: "left",
    width: 372,
    height: 763,
  },
  frame4: {
    width: 582,
  },
  frame3: {
    top: 26,
    alignItems: "flex-end",
    justifyContent: "center",
    width: 792,
    left: -191,
    position: "absolute",
  },
  frameItem: {
    top: 69,
    left: 400,
    borderStyle: "solid",
    borderColor: "#838383",
    borderRightWidth: 2,
    width: 2,
    height: 202,
    position: "absolute",
  },
  frame: {
    height: 789,
    marginTop: 26,
    width: 410,
    overflow: "hidden",
  },
  educationTopicIcon: {
    flex: 1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_16xl,
    overflow: "hidden",
  },
});

export default EducationTopic;
