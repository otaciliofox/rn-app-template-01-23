import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Routes } from "_routes/index";
import { THEME } from "_theme/index";
import { LoaderGlobal } from "_components/atoms/LoaderGlobal";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        // await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={THEME.colors.gray[600]}
        translucent
      />
      {appIsReady ? <Routes /> : <LoaderGlobal />}
    </NativeBaseProvider>
  );
}
