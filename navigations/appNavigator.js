import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/app/Dashboard";
import Notification from "../screens/app/Notification";
import Purchase from "../screens/app/Purchase";
import Settings from "../screens/app/Settings";
import Account from "../screens/app/Settings/Account";
import AutoLogout from "../screens/app/Settings/AutoLogout";
import Biometric from "../screens/app/Settings/Biometric";
import MobileNumber from "../screens/app/Settings/MobileNumber";
import DeviceManagement from "../screens/app/Settings/Device";
import Airtime from "../screens/app/Services/Airtime";
import Contact from "../screens/app/Contact";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notifications" component={Notification} />
      <Stack.Screen name="Pay Bills" component={Purchase} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Auto-Logout Settings" component={AutoLogout} />
      <Stack.Screen name="Biometric authentication" component={Biometric} />
      <Stack.Screen name="Mobile Number" component={MobileNumber} />
      <Stack.Screen name="Device Management" component={DeviceManagement} />
      <Stack.Screen name="Airtime" component={Airtime} options={{title: 'Top up Airtime'}} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
