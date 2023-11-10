import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';
import { setAutoLogout } from '../../../redux/slices/appSlice';

export default function AutoLogout() {
    const {autoLogout} = useSelector(state=>state.app)

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(setAutoLogout())
    }
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.card}>
         <View style={{width:'80%'}}>
            <Text style={{fontSize:15, fontWeight: '600'}}>Auto-Logout Preference</Text>
            <Text style={{fontSize:12, color: 'gray'}}>Set a identity verifying preference for access the App to enhance your account security</Text>
         </View>
         <View>
          <TouchableOpacity onPress={handleClick}>
          {autoLogout ?  <FontAwesome name="toggle-on" size={30} color="#03ac13" /> :  <FontAwesome name="toggle-off" size={30} color="gray" /> }
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
        paddingTop:15
    }
})