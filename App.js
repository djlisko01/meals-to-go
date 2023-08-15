import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { PaperProvider } from "react-native-paper";
import { RestaurantScreen } from "./src/feature/restaurant/screen/restaurants.screen";
const isAndroid = Platform.OS === "Android";
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <RestaurantScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.height : 0,
  },
});
