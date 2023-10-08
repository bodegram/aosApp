import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './appNavigator'
import AuthNavigator from './authNavigator'
import {useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';


export default function Navigator() {
    const {isAuthenticated} = useSelector(state=>state.auth)
  return (
    <NavigationContainer>
         {!isAuthenticated ? <AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}