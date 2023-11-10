import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import ReferralCard from '../../components/ReferralCard'

export default function Purchase() {
  return (
   <SafeAreaView style={styles.container}>
     <ServiceCard/>
     <ReferralCard/>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    marginTop:10
    
  }
})