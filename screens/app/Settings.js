import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import {useNavigation} from '@react-navigation/native'


export default function Settings() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#03ac13"/>
      <ScrollView>
        <ListItem onPress={()=> navigation.navigate('Account')}>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:15}}>Account</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Transaction Pin</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={()=> navigation.navigate('Auto-Logout Settings')}>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Auto-Logout Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Payment Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem  onPress={()=> navigation.navigate('Biometric authentication')}>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Biometric authentication</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem  onPress={()=> navigation.navigate('Mobile Number')}>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Mobile number</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Security questions</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem  onPress={()=> navigation.navigate('Device Management')}>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Device Management</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Notification Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>Email Alert Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title  style={{fontSize:15}}>About AOS Telecom</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
