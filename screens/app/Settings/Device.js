import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import * as Device from 'expo-device';


export default function DeviceManagement() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 20, paddingLeft: 10, paddingRight: 10, marginBottom:20 }}>
          <Text style={{ color: "gray" }}>
            The following are all the devices that your account has been logged
            in or before, you can review and remove any device to protect your
            account. You will be required to authentication like verifying OTP or
            other ways is required when logging again with the removed device.
          </Text>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={Device.deviceName === Device.deviceName ? {fontWeight: 'bold', fontSize: 13, color: 'green'}: {fontWeight: 'bold', fontSize: 13}}>{Device.deviceName}</ListItem.Title>
              <ListItem.Subtitle style={{fontSize: 11}}>2023/10/4 20:2:22</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
