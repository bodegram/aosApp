import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';
import { setBiometricLogin, setBiometricPay } from '../../../redux/slices/appSlice';
import { Ionicons } from '@expo/vector-icons'; 


export default function Biometric() {
    const {biometricLogin, biometricPay} = useSelector(state=>state.app)

    const dispatch = useDispatch()

    const handleLogin = ()=>{
        dispatch(setBiometricLogin())
    }

    const handlePay = ()=>{
        dispatch(setBiometricPay())
    }
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.card}>
         <View style={{width:'80%'}}>
            <Text style={{fontSize:15, fontWeight: '400'}}><Ionicons name="ios-finger-print" size={15} color="black" /> Touch ID Login</Text>
         </View>
         <View>
          <TouchableOpacity onPress={handleLogin}>
          {biometricLogin ?  <FontAwesome name="toggle-on" size={28} color="#03ac13" /> :  <FontAwesome name="toggle-off" size={28} color="gray" /> }
          </TouchableOpacity>
         </View>
      </View>
      <View style={styles.card}>
         <View style={{width:'80%'}}>
            <Text style={{fontSize:15, fontWeight: '400'}}><Ionicons name="ios-finger-print" size={15} color="black" /> Touch ID for Pay</Text>
         </View>
         <View>
          <TouchableOpacity onPress={handlePay}>
          {biometricPay ?  <FontAwesome name="toggle-on" size={28} color="#03ac13" /> :  <FontAwesome name="toggle-off" size={28} color="gray" /> }
          </TouchableOpacity>
         </View>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10
    },
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:15,
        marginBottom: 10,

    }
})