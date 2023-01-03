import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import LoginScreen from "./Screens/LoginScreen";
import RegistartionScreen from "./Screens/RegistrationScreen";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
  };
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
  },
});
