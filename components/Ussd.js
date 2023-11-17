import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";

export default function Ussd() {
  return (
    <>
      <ListItem>
        <Icon name="attach-money" type="material" color="green" />
        <ListItem.Content>
          <ListItem.Title>USSD enquiry</ListItem.Title>
          <ListItem.Subtitle>Check phone balance and more</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </>
  );
}

const styles = StyleSheet.create({});
