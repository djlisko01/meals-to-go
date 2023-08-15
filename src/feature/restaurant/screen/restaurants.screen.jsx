import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/spacing";
import { RestaurantInfo } from "../components/resaurants-info.component";

export const RestaurantScreen = () => {
  return (
    <Fragment>
      <View style={styles.searchbar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.restaurantList}>
        <RestaurantInfo />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  restaurantList: {
    backgroundColor: "blue",
    padding: spacing.sm,
    flex: 1,
  },
  searchbar: {
    padding: spacing.sm,
  },
});
