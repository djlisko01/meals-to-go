import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { spacing } from "./src/utils/spacing";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { PaperProvider } from "react-native-paper";

const isAndroid = Platform.OS === "Android";
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.restaurantList}>
          <Text>List</Text>
        </View>
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
  restaurantList: {
    backgroundColor: "blue",
    padding: spacing.sm,
    flex: 1,
  },
  searchbar: {
    backgroundColor: "green",
    padding: spacing.sm,
  },
});
