import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/spacing";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchBarView = styled.View`
  padding: 10px;
`;

const ListView = styled.View`
  padding: 10px;
  flex: 1;
  background-color: blue;
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