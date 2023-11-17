import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Ussd from "../../../components/Ussd";

export default function Airtime() {
    const [network, setNetwork] = useState('')
    const [amount, setAmount] = useState(0)
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "white",
            paddingBottom: 30,
          }}
        >
          <View>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>
          <View style={{ position: "absolute", right: 15, marginTop: 5 }}>
            <MaterialIcons
              name="contact-phone"
              size={35}
              color="black"
              onPress={() => navigation.navigate("Contact")}
            />
          </View>
        </View>
        <View style={{marginLeft:10, marginRight:10, backgroundColor:'white', paddingHorizontal:10, paddingVertical:15, marginTop:30,borderRadius:10}}>
            <View style={{marginBottom:10}}>
                <Text>🔥 Top up</Text>
            </View>
            <View style={{flexDirection:'row', marginBottom:10, gap:4, flexWrap: 'wrap'}}>
                <View style={{backgroundColor: 'ghostwhite', borderRadius:10, padding:15}}>
                      <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold'}}>N100</Text>
                      <Text  style={{fontSize:12, textAlign:'center'}}>N3 Cashback</Text>
                </View>
                <View style={{backgroundColor: 'ghostwhite', borderRadius:10, padding:15}}>
                      <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold'}}>N200</Text>
                      <Text  style={{fontSize:12, textAlign:'center'}}>N3 Cashback</Text>
                </View>
                <View style={{backgroundColor: 'ghostwhite', borderRadius:10, padding:15}}>
                      <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold'}}>N500</Text>
                      <Text  style={{fontSize:12, textAlign:'center'}}>N3 Cashback</Text>
                </View>
                <View style={{backgroundColor: 'ghostwhite', borderRadius:10, padding:15}}>
                      <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold'}}>N500</Text>
                      <Text  style={{fontSize:12, textAlign:'center'}}>N3 Cashback</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',gap:4, justifyContent:'space-between'}}>
                 <TextInput style={{borderBottomWidth:1, flex:1, fontSize:14}} placeholder="NGN 50-1000" keyboardType="number-pad"/>
                 <TouchableOpacity style={{backgroundColor:'green', paddingHorizontal: 30, paddingVertical:10, borderRadius:20}}>
                    <Text style={{color:'white'}}>Pay</Text>
                 </TouchableOpacity>
            </View>
        </View>
        <View style={{marginLeft:10, marginRight:10,marginTop:30}}>
            <Ussd/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
  },
});
