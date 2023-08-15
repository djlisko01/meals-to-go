import { React } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { spacing } from "../../../utils/spacing";

export const RestaurantInfo = ({ resturant = {} }) => {
  const {
    name = "Some Name",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some road",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;
  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} style={styles.card} />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

styles = StyleSheet.create({
  card: {
    margin: spacing.md,
  },
});
