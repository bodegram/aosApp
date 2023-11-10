import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

export default function Contact() {
  let [phoneno, setPhoneno] = useState(undefined);
  let [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;

          setPhoneno(contact);
        } else {
          setError("No contact found");
        }
      }
    })();
  }, []);

  console.log("error", error);
  console.log(phoneno);

  const getPhoneNumber = () =>{
    if(phoneno !== undefined){
        phoneno?.map((item, index)=>(
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text></Text>
            </View>
           </View>
        ))
    }
    else{
        return <View>
            <Text>Loading...</Text>
        </View>
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Contact</Text>
        </View>
        <View>{getPhoneNumber()}</View>
        <Text></Text>
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
  },
});
