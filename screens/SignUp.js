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
import { Border, Color, FontFamily } from "../GlobalStyles";
import { supabase } from "../lib/supabase";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert("Sign up failed", "Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Sign up failed", "Password and confirm password do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          username: username.trim(),
        },
      },
    });

    if (error) {
      Alert.alert("Sign up failed", error.message);
      return;
    }

    Alert.alert(
      "Account created",
      "Check your email if Supabase asks for confirmation, then log in."
    );
    navigation.navigate("LogIn");
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
            <Text style={styles.tagline}>Create your account and start tracking progress</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Create account</Text>
            <Text style={styles.subtitle}>Use your email to sign up for NEki.</Text>

            <View style={styles.field}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor="#9aa3ad"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="words"
                textContentType="username"
              />
            </View>

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
                  placeholder="Create password"
                  placeholderTextColor="#9aa3ad"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  textContentType="newPassword"
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

            <View style={styles.field}>
              <Text style={styles.label}>Confirm password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Repeat password"
                  placeholderTextColor="#9aa3ad"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  textContentType="newPassword"
                />
                <Pressable
                  style={styles.showButton}
                  onPress={() => setShowConfirmPassword((value) => !value)}
                >
                  <Text style={styles.showButtonText}>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </Pressable>
              </View>
            </View>

            <Pressable style={styles.primaryButton} onPress={handleSignUp}>
              <Text style={styles.primaryButtonText}>Sign Up</Text>
            </Pressable>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("LogIn")}>
              <Text style={styles.footerLink}>Log in</Text>
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
    marginBottom: 24,
  },
  logoMark: {
    width: 64,
    height: 64,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorSeagreen_100,
    marginBottom: 12,
  },
  logoMarkText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 30,
    fontWeight: "700",
  },
  brand: {
    color: Color.colorSeagreen_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 46,
  },
  tagline: {
    marginTop: 5,
    color: "#62706b",
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
    lineHeight: 21,
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
    marginBottom: 22,
    color: "#6b756f",
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
    lineHeight: 21,
  },
  field: {
    marginBottom: 16,
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
  primaryButton: {
    minHeight: 56,
    borderRadius: Border.br_xs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorSeagreen_100,
    marginTop: 8,
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
    marginTop: 22,
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

export default SignUp;
