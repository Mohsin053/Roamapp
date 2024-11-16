import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function notificationsettings() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f7f7f7",
        padding: 20,
      }}
      contentContainerStyle={{
        rowGap: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name={"chevron-back"} color={"black"} size={24} />
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            fontWeight: "light",
            fontSize: 18,
          }}
        >
          Notifications Settings
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>
      <View style={{ gap: 16 }}>
        <View
          style={{
            height: 58,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderRadius: 16,
            backgroundColor: "white",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
            }}
          >
            Enable
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            height: 58,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderRadius: 16,
            backgroundColor: "white",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
            }}
          >
            Ride Availability
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled1 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View
          style={{
            height: 58,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderRadius: 16,
            backgroundColor: "white",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
            }}
          >
            Service disruption
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled2 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View
          style={{
            height: 58,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderRadius: 16,
            backgroundColor: "white",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
            }}
          >
            Leave Alert
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled3 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
