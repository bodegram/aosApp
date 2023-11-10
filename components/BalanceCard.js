import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { EvilIcons, Ionicons, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setShowBalance } from "../redux/slices/appSlice";

export default function BalanceCard() {
  const { showBalance } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View>
          <View style={styles.cardLeftTop}>
            <Text style={{ color: "white" }}>Your current balance is</Text>
          </View>
        </View>
        <View>
          <Text style={styles.balanceAmount}>
            {showBalance ? "₦10,000,187.01" : "****"}
          </Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text style={{ color: "white" }}>
          {showBalance ? "Hide Balance" : "Show Balance"}
        </Text>
        <Feather
          name={showBalance ? "eye-off" : "eye"}
          size={20}
          color="white"
          onPress={() => dispatch(setShowBalance())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#03ac13",
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 1,
    marginTop: 10,
  },
  cardLeft: {
    marginBottom: 10,
  },
  cardRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
  },
  cardLeftTop: {
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
