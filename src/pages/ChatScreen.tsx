import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {
  return (
    <ScrollView style={{flex:1, padding: 15}}>
      <StatusBar />
      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 24, fontWeight: 700, fontFamily: "times"}}>Find People</Text>
      </View>

      {/* search  */}
      <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row",}}>
        <TextInput style={{ width: "80%",backgroundColor: "#e2e1e4", fontSize: 18, paddingLeft: 10, paddingVertical: 15, borderRadius: 10}} placeholder="🔍  Enter the name" />
        <Text style={{fontSize: 22, color: "#0b3ffa", fontWeight: 500}}>Cencel</Text>
      </View>

      {/* filter */}
      <View style={{marginVertical: 10, flexDirection: "row", gap: 10}}>
        <Button style={{width:"30%" }}>Guwahati</Button>
        <Button style={{width:"30%" }}>Nalbari</Button>
        <Button style={{width:"20%" }}><Ionicons name="menu" size={25}/></Button>
      </View>
      

    </ScrollView>
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
