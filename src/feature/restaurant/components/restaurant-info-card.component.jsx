import { React } from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text, View, Image } from "react-native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Open = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;
  align-content: "center";
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.fontSizes.caption};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Name",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some road",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  } = restaurant;

  const ratingsArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Container>
          <Rating>
            {ratingsArray.map((_, id) => {
              return <SvgXml key={id} xml={star} width={25} height={25} />;
            })}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Text
                variant="label"
                style={{ color: "red", fontWeight: "bold" }}
              >
                Temporarily Closed
              </Text>
            )}
            <View style={{ paddingLeft: 10 }} />
            {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            <View style={{ paddingLeft: 10 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Open>
        </Container>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
