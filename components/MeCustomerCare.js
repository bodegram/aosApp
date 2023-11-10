import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function MeCustomerCare() {
  return (
    <View style={styles.card}>
      <AntDesign name="customerservice" size={30} color="white" />
      <Text style={{fontWeight: '600', marginTop:5, fontSize:11, color:'white'}}>How can we help you?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 5,
    marginBottom: 20,
    flexDirection: "row",
    gap:13
  },
});
