import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import React, { Fragment } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'


export default function Register() {
  const navigation = useNavigation()
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#FF8000'/>
        <View style={styles.header}>
         
          <Text style={styles.headerText}>Create an account</Text>
          <Text style={styles.headerSubText}>
            Please sign up to continue
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <View style={styles.field}>
              <TextInput
                style={styles.input}
                placeholder='Enter Email'
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.field}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                textContentType="password"
                secureTextEntry
              />
            </View>
            <View style={styles.fieldBtn}>
               <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>Sign up</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.formBottom}>
                <View style={{flexDirection: 'row', gap: 3}}>
                  <Text>Have an account?</Text>
                  <Text style={styles.registerText} onPress={()=>navigation.navigate('Login')}>Sign in</Text>
                </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 8,
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    marginTop: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  headerSubText: {
    fontSize: 13,
  },
  body: {
    marginTop: 5,
  },
  form: {
    paddingTop: 5,
    paddingBottom: 5,
  },

  field: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  fieldBtn: {
    alignItems: 'flex-end'
  },
  input: {
    padding: 13,
    borderColor: '#FF8000',
    borderWidth: 1,
    borderRadius: 2
  },
  button:{
    backgroundColor: '#FF8000',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
   
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  },
  formBottom:{
    marginTop: 20,
    alignItems: 'center'
  },
  registerText:{
    color: '#FF8000'
  }
});
