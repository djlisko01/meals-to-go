import { SafeAreaView, StatusBar, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { PaperProvider } from "react-native-paper";
import { RestaurantScreen } from "./src/feature/restaurant/screen/restaurants.screen";
import { theme } from "./src/infrastructure/themed/";
const isAndroid = Platform.OS === "Android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:{StatusBar.currentHeight}px`};
  padding: 16px;
`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded | !latoLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <RestaurantScreen />
        </SafeArea>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
