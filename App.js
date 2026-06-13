import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/LogIn";
import Profile from "./screens/Profile";
import EducationTopic from "./screens/EducationTopic";
import Quiz from "./screens/Quiz";
import Achievements from "./screens/Achievements";
import DuaHadith from "./screens/DuaHadith";
import QuranRecitation from "./screens/QuranRecitation";
import QuranRecitationSurahInfo from "./screens/QuranRecitationSurahInfo";
import DuaRecitation from "./screens/DuaRecitation";
import Socials from "./screens/Socials";
import TheQuran from "./screens/TheQuran";
import TheQuranScrollable from "./screens/TheQuranScrollable";
import LoadingScreen from "./screens/LoadingScreen";
import SignUp from "./screens/SignUp";
import Education from "./screens/Education";
import Home from "./screens/Home";
import Profile1 from "./screens/Profile1";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

const App = () => {
  const [session, setSession] = React.useState(null);
  const [sessionChecked, setSessionChecked] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Tajawal-Light": require("./assets/fonts/Tajawal-Light.ttf"),
    "Tajawal-Regular": require("./assets/fonts/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("./assets/fonts/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("./assets/fonts/Tajawal-Bold.ttf"),
    "Tajawal-ExtraBold": require("./assets/fonts/Tajawal-ExtraBold.ttf"),
    "Tajawal-Black": require("./assets/fonts/Tajawal-Black.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Harmattan-Bold": require("./assets/fonts/Harmattan-Bold.ttf"),
    "HindSiliguri-Regular": require("./assets/fonts/HindSiliguri-Regular.ttf"),
  });

  React.useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (isMounted) {
        setSession(data.session);
        setSessionChecked(true);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setSessionChecked(true);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if ((!fontsLoaded && !error) || !sessionChecked) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#079B73" />
      </View>
    );
  }

  return (
    <NavigationContainer>
        <Stack.Navigator
          key={session?.user ? "signed-in" : "signed-out"}
          initialRouteName={session?.user ? "Home" : "LogIn"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EducationTopic" component={EducationTopic} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Achievements" component={Achievements} />
          <Stack.Screen name="DuaHadith" component={DuaHadith} />
          <Stack.Screen name="QuranRecitation" component={QuranRecitation} />
          <Stack.Screen name="QuranRecitationSurahInfo" component={QuranRecitationSurahInfo} />
          <Stack.Screen name="DuaRecitation" component={DuaRecitation} />
          <Stack.Screen name="Socials" component={Socials} />
          <Stack.Screen name="TheQuran" component={TheQuran} />
          <Stack.Screen name="TheQuranScrollable" component={TheQuranScrollable} />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile1" component={Profile1} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FAF7",
  },
});

export default App;
