import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


const users = [
  {
    id: 1,
    name: "Kangkan Baishya",
    profession: "Software Developer in learning phase at chaicode",
    location: "Nalbari, Majdia",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    profession: "Frontend Developer",
    location: "Guwahati, Assam",
    image:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Priya Das",
    profession: "UI/UX Designer",
    location: "Jorhat, Assam",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Aman Verma",
    profession: "Backend Developer",
    location: "Dibrugarh, Assam",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    profession: "Mobile App Developer",
    location: "Tezpur, Assam",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Rohan Kalita",
    profession: "Full Stack Developer",
    location: "Nagaon, Assam",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Ananya Bora",
    profession: "Software Engineer",
    location: "Barpeta, Assam",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Sourav Deka",
    profession: "React Native Developer",
    location: "Mangaldoi, Assam",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Megha Saikia",
    profession: "Web Developer",
    location: "Silchar, Assam",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Arjun Nath",
    profession: "MERN Stack Developer",
    location: "Bongaigaon, Assam",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=764&auto=format&fit=crop",
  },
];

const HomeScreen = () => {
  return (
        <ScrollView style={{ flex: 1, padding: 15 }}>
      <StatusBar />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 700, fontFamily: "times" }}>
          Find People
        </Text>
      </View>

      {/* search  */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            width: "80%",
            backgroundColor: "#e2e1e4",
            fontSize: 18,
            paddingLeft: 10,
            paddingVertical: 15,
            borderRadius: 10,
          }}
          placeholder="🔍  Enter the name"
        />
        <Text style={{ fontSize: 22, color: "#0b3ffa", fontWeight: 500 }}>
          Cencel
        </Text>
      </View>

      {/* filter */}
      <View style={{ marginVertical: 10, flexDirection: "row", gap: 10 }}>
        <Button style={{ width: "30%" }}>Guwahati</Button>
        <Button style={{ width: "30%" }}>Nalbari</Button>
        {/* <Button style={{ width: "20%" }}>
          <Ionicons name="menu" size={25} />
        </Button> */}
      </View>

      {/* names */}
      {users.map((data) => {
        return (<View>
        <View style={{width: "100%" , height: 90, backgroundColor: "", flexDirection: "row", alignItems: "center", gap: 10}}>
          <Image
            source={{
              uri: `${data.image}`,
            }}
            style={{width: 60, height: 60, borderRadius: 100}}
          />
          <View style={{backgroundColor: "", paddingVertical: 0,}}>
            <Text style={{fontSize: 22, marginBottom: 2, fontWeight: 600}}>{data.name}</Text>
            <Text style={{fontSize: 14, fontWeight: 500, marginBottom:3, width: "100%"}}>{data.profession}</Text>
            <Text style={{fontSize: 14 , color: "#666"}}><Ionicons name="location"  size={20}/>{data.location}</Text>
          </View>
        </View>
      <View style={{width: "100%", backgroundColor: "#1111114a", height: 1}} />
      </View>
        )
      })}

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})