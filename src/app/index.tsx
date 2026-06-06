import ChatScreen from "@/pages/ChatScreen";
import HomeScreen from "@/pages/HomeScreen";
import ProfileScreen from "@/pages/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function Index() {
  return (
    <Tab.Navigator initialRouteName="Chat"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const icons = route.name === "Home" ? focused ? "home" : "home-outline" :
          route.name === "Chat" ? focused ? "text" : "text-outline" : 
          route.name === "Profile" ? focused ? "person" : "person-outline" : focused  ? "person"  : "person-outline";
          
          return <Ionicons name={icons} size={size} color={color} />
        }, 
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
