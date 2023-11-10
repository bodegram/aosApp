import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

export default function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Icon name="money-check" type="font-awesome-5" size={15} />
            <Text style={styles.cardTitle}>Transaction Successful</Text>
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.cardText}>
              Your Transaction is successful, thanks for using our service. Awo
              fisan samauel olabode
            </Text>
          </View>
          <View style={styles.footer}>
             <View>
              <Text style={{color: 'grey'}}>Today 08:42</Text>
             </View>
             <View>
               <TouchableOpacity>
                <Text style={{color: "#03ac13"}}>View</Text>
               </TouchableOpacity>
             </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },

  card: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 5,
    paddingTop: 17,
    paddingBottom: 17,
    borderRadius: 5,
    backgroundColor: "white",
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  cardTop: {
    marginBottom: 4,
    flexDirection: "row",
    gap: 5,
  },
  cardBottom: {},
  cardText: {
    fontSize: 15,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14
  }
});
