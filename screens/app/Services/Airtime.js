import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, {useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'


export default function Airtime() {
    const navigation = useNavigation()
 return (
   <SafeAreaView style={styles.flex}>
    <ScrollView>
    <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor: 'white', paddingBottom: 30}}>
     <View>
          <TextInput style={styles.input}/>
     </View>
     <View style={{position: 'absolute', right: 15, marginTop: 5}}>
     <MaterialIcons name="contact-phone" size={35} color="black" onPress={()=>navigation.navigate('Contact')} />
     </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    input:{
       borderBottomWidth: 1,
       borderBottomColor: 'gray',
       padding:10
        
    }
})