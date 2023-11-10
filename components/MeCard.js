import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { getLogoutSuccess } from "../redux/slices/authSlice";
import {useNavigation} from '@react-navigation/native'
export default function MeCard() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <>
        <ListItem>
          <Icon name="history" type="font-awesome" size={20} color= "#03ac13" />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Transaction History</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="organization" type="octicon"  size={20} color= "#03ac13" />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>About Us</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="credit-card" type="entypo"  size={20} color= "#03ac13" />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>My Cards</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon
            name="question-circle"
            type="font-awesome"
            size={20}
            color= "#03ac13"
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>FAQs</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={()=>navigation.navigate('Settings')}>
          <Icon
            name="gear"
            type="font-awesome"
            color= "#03ac13"
            size={20}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Settings</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={()=> dispatch(getLogoutSuccess())}>
          <Icon
            name="logout"
            type="material-icon"
            color= "#03ac13"
            size={20}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Logout</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:15,
  },
  title:{
    fontSize: 13
  }
});
