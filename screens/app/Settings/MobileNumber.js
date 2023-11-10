import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function MobileNumber() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginBottom: 30}}>
          <Text style={{fontWeight: '600', fontSize:17}}>Current Mobile Number</Text>
          <Text  style={{fontWeight: '600', fontSize:17}}>09155104851</Text>
        </View>
        <View>
          <Text style={{marginBottom:5}}>Enter your new mobile number</Text>
          <TextInput style={styles.input} keyboardType="number-pad" maxLength={11} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50
  },
  input: {
    backgroundColor: "ghostwhite",
    padding: 15,
    marginBottom: 20,

  },
  btn: {
    backgroundColor: "#03ac13",
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
