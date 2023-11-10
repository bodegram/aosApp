import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Notification from "./Notification";
import Purchase from "./Purchase";
import Me from "./Me";
import {
  Ionicons,
  Feather,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Fund from "./Fund";
import { Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

const Tab = createBottomTabNavigator();


const HeaderRight = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: "row", gap: 16, paddingRight: 10 }}>
      <View>
        <AntDesign name="customerservice" size={22} color="black" />
      </View>
      <View>
        <Ionicons name="scan" size={24} color="black" />
      </View>
      <View>
        <MaterialCommunityIcons name="bell" size={22} color="black" onPress={()=> navigation.navigate('Notifications')} />
      </View>
    </View>
  );
};

const HeaderTitle = () => {
  return (
    <View style={{ flexDirection: "row", gap: 4 }}>
      <View>
        <Ionicons name="ios-person-circle" size={30} color="#03ac13" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Hi, Samuel</Text>
        <Text style={{ fontSize: 10 }}>Welcome, enjoy our services!</Text>
      </View>
    </View>
  );
};

const HeaderRightTwo = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: "row", gap: 4, paddingRight: 10 }}>
      <View>
        <MaterialIcons name="settings" size={22} color="white" onPress={()=>navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

const HeaderTitleTwo = () => {
  return (
    <View style={{ flexDirection: "row", gap: 4 }}>
      <View>
        <Ionicons name="ios-person-circle" size={30} color="white" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", color: "white" }}>Samuel</Text>
        <Text style={{ fontSize: 10, color: "white" }}>
          Phone No: 09155104851
        </Text>
      </View>
    </View>
  );
};

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          height: 50,
          color: "black",
        },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#03ac13",
        tabBarIcon: ({ focused, color }) => {
          let iconColor;
          let iconName;
          if (route.name === "Home") {
            iconColor = focused ? "#03ac13" : "black";
            return <Feather name="home" size={20} color={iconColor} />;
          } else if (route.name === "Fund") {
            iconColor = focused ? "#03ac13" : "black";
            return (
              <MaterialCommunityIcons
                name="compare-horizontal"
                size={30}
                color={iconColor}
              />
            );
          } else if (route.name === "Me") {
            iconColor = focused ? "#03ac13" : "black";
            return (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={iconColor}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Tab.Screen
        name="Fund"
        component={Fund}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          headerShown: true,
          headerTitle: () => <HeaderTitleTwo />,
          headerRight: () => <HeaderRightTwo />,
          headerStyle: {
            backgroundColor: "#03ac13",
          },
        }}
      />
    </Tab.Navigator>
  );
}
