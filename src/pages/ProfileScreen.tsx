import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.nameBlock}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.status}>Hey there! I am using Chat App.</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="chatbubbles-outline" size={20} color="#fff" />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.secondaryBtn]}>
          <Ionicons name="call-outline" size={20} color="#007AFF" />
          <Text style={[styles.actionText, styles.secondaryText]}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.secondaryBtn]}>
          <MaterialIcons name="more-horiz" size={20} color="#007AFF" />
          <Text style={[styles.actionText, styles.secondaryText]}>More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>Software engineer • Loves building UI</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Media, Links and Docs</Text>
        <Text style={styles.sectionHint}>12 items</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.sectionHint}>Default</Text>
      </View>

      <View style={styles.sectionEnd}>
        <Text style={[styles.sectionTitle, { color: "#ff3b30" }]}>Delete Contact</Text>
        <Text style={[styles.sectionTitle, { color: "#ff3b30" }]}>Block Contact</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: "#fff" },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  avatarWrapper: {
    marginRight: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#ddd",
  },
  nameBlock: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  status: {
    color: "#666",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    marginHorizontal: 6,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  actionText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
  secondaryBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  secondaryText: {
    color: "#007AFF",
  },
  section: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionEnd: {
    paddingVertical: 14,
  },
  sectionTitle: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  sectionText: {
    color: "#444",
  },
  sectionHint: {
    color: "#888",
  },
});
