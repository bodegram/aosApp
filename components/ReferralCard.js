import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";

export default function ReferralCard() {
  return (
    <>
      <ListItem>
        <Icon name="attach-money" type="material" color="green" />
        <ListItem.Content>
          <ListItem.Title>Cash up for grabs</ListItem.Title>
          <ListItem.Subtitle>Invite friends to earn Cash</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </>
  );
}

const styles = StyleSheet.create({});
