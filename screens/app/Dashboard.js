import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Notification from './Notification';
import Purchase from './Purchase';
import Settings from './Settings';
import {Icon} from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function Dashboard(){
    return (
      <Tab.Navigator screenOptions={({route})=>(
        {
          tabBarStyle:{
            backgroundColor: 'black',
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: '#FF8000',
          tabBarIcon: (focused, color)=>{
            let iconName;
            let iconColor;
            if(route.name == "Home"){
                iconName = ''
                return (
                  <Icon/>
                )
            }
          }
        }
      )
        
      }>
        <Tab.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Tab.Screen name="Purchase" component={Purchase}  options={{headerShown: false}} />
        <Tab.Screen name="Notification" component={Notification}  options={{headerShown: false}} />
        <Tab.Screen name="Settings" component={Settings}  options={{headerShown: false}} />
      </Tab.Navigator>
    )
  
}