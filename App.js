import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { PaperProvider } from "react-native-paper";
import { RestaurantScreen } from "./src/feature/restaurant/screen/restaurants.screen";
const isAndroid = Platform.OS === "Android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:{StatusBar.currentHeight}px`};
  padding: 16px;
`;

export default function App() {
  return (
    <PaperProvider>
      <SafeArea>
        <RestaurantScreen />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}