import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import MeCard from "../../components/MeCard";
import MeFooter from "../../components/MeFooter";
import MeCustomerCare from "../../components/MeCustomerCare";

export default function Me() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MeCard />

        <View style={styles.footer}x>
          <MeCustomerCare />
          <MeFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  footer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
