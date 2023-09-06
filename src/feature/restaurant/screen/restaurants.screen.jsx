import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const ListView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = () => {
  return (
    <Fragment>
      <SearchBarView>
        <Searchbar placeholder="Search" />
      </SearchBarView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </Fragment>
  );
};