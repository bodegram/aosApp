import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


export default function MeFooter() {
  return (
    <View>
      <View style={styles.top}>
          <Text style={styles.topText}>Privacy Policy <AntDesign name="right" size={10} color="black" /></Text>
          <Text  style={styles.topText}>T&C <AntDesign name="right" size={10} color="black" /></Text>
          <Text  style={styles.topText}>English <AntDesign name="right" size={10} color="black" /></Text>
      </View>
      <View style={styles.bottom}>
          <Text style={styles.bottomText}><AntDesign name="copyright" size={9} color="black" /> AOS 2024</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 30
  },
  bottom:{
    alignItems: 'center'
  },
  topText:{
    fontSize: 10
  },
  bottomText:{
    fontSize: 10
  }
})