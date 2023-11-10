import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

export default function ServiceCard() {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.topText}>Services</Text>
      </View>
      <View style={styles.bottom}>
        <View>
        <AntDesign name="phone" size={30} color="green"   style={styles.servicesIcon} onPress={()=>navigation.navigate('Airtime')}/>
          <Text style={styles.serviceText} >Airtime</Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="compare-horizontal"
            size={30}
            color="red"
            style={styles.servicesIcon}
          />
          <Text style={styles.serviceText}>Data </Text>
        </View>
        <View>
      
          <Entypo name="light-bulb" size={30} color="#ffbf00"  style={styles.servicesIcon}/>
          <Text style={styles.serviceText}>Electricity</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="cash" size={30} color="green"  style={styles.servicesIcon} />
          <Text style={styles.serviceText}>Giveway</Text>
        </View>
        <View>
          <FontAwesome5 name="user-graduate" size={30} color="blue"  style={styles.servicesIcon}/>
          <Text style={styles.serviceText}>Education</Text>
        </View>
        <View>
          <Entypo name="tv" size={30} color="#ffbf00"  style={styles.servicesIcon} />
          <Text style={styles.serviceText}>TV</Text>
        </View>
        <View>
          <FontAwesome5 name="comment-dollar" size={30} color="green"  style={styles.servicesIcon} />
          <Text style={styles.serviceText}>Savings</Text>
        </View>
        <View>
          <FontAwesome5 name="money-bill-wave" size={30} color="purple"  style={styles.servicesIcon} />
          <Text style={styles.serviceText}>Referral</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  topText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  bottom: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap:15
  },
  serviceText: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
  },
  servicesText: {
    fontSize: 10,
  },
  servicesIcon: {
    backgroundColor: "ghostwhite",
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
  },
});
