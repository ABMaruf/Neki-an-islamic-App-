import * as React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { supabase } from "../lib/supabase";

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSignin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      Alert.alert("Login failed", error.message);
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoMark}>
              <Text style={styles.logoMarkText}>N</Text>
            </View>
            <Text style={styles.brand}>NEki</Text>
            <Text style={styles.tagline}>Continue your good deeds journey</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in with your email and password.</Text>

            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="name@example.com"
                placeholderTextColor="#9aa3ad"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter password"
                  placeholderTextColor="#9aa3ad"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  textContentType="password"
                />
                <Pressable
                  style={styles.showButton}
                  onPress={() => setShowPassword((value) => !value)}
                >
                  <Text style={styles.showButtonText}>
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.metaRow}>
              <Text style={styles.rememberText}>Remember me</Text>
              <Pressable>
                <Text style={styles.linkText}>Forgot password?</Text>
              </Pressable>
            </View>

            <Pressable style={styles.primaryButton} onPress={handleSignin}>
              <Text style={styles.primaryButtonText}>Log In</Text>
            </Pressable>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>New to NEki?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.footerLink}>Create account</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7fbf9",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  logoMark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorSeagreen_100,
    marginBottom: 14,
  },
  logoMarkText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 34,
    fontWeight: "700",
  },
  brand: {
    color: Color.colorSeagreen_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 42,
    fontWeight: "700",
    lineHeight: 50,
  },
  tagline: {
    marginTop: 6,
    color: "#62706b",
    fontFamily: FontFamily.interRegular,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    borderRadius: 28,
    backgroundColor: Color.colorWhite,
    padding: 24,
    shadowColor: "#0b2f23",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    color: "#101816",
    fontFamily: FontFamily.interSemiBold,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    color: "#6b756f",
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
    lineHeight: 21,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    marginBottom: 8,
    color: "#24332e",
    fontFamily: FontFamily.interMedium,
    fontSize: 14,
    lineHeight: 20,
  },
  input: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: "#d8e2dd",
    borderRadius: 14,
    backgroundColor: "#fbfdfc",
    color: "#101816",
    fontFamily: FontFamily.interRegular,
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  passwordRow: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d8e2dd",
    borderRadius: 14,
    backgroundColor: "#fbfdfc",
  },
  passwordInput: {
    flex: 1,
    minHeight: 54,
    color: "#101816",
    fontFamily: FontFamily.interRegular,
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  showButton: {
    minHeight: 54,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  showButtonText: {
    color: Color.colorSeagreen_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 13,
    fontWeight: "600",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
    marginBottom: 22,
  },
  rememberText: {
    color: "#31413b",
    fontFamily: FontFamily.interRegular,
    fontSize: 13,
    lineHeight: 20,
  },
  linkText: {
    color: Color.colorSeagreen_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
  },
  primaryButton: {
    minHeight: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorSeagreen_100,
  },
  primaryButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 24,
  },
  footerText: {
    color: "#4e5b56",
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
    lineHeight: 20,
  },
  footerLink: {
    color: Color.colorSeagreen_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
});

export default LogIn;
