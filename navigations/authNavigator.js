import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import AppIntro from '../screens/auth/AppIntro';



const Stack = createStackNavigator();



export default function AuthNavigator() {
  
const HeaderLeft = () =>{
  const navigation = useNavigation()
  return ''
}
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={AppIntro}  options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerTitle: ()=> <HeaderLeft/>, headerShadowVisible: false }}/>
      <Stack.Screen name="Register" component={Register}  options={{headerTitle: ()=><HeaderLeft/>, headerShadowVisible: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}  options={{headerTitle: ()=><HeaderLeft/>, headerShadowVisible: false }} />
    </Stack.Navigator>
  );
}