import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import lime from "../assets/images/lime.png";
import veo from "../assets/images/veo.png";
import spin from "../assets/images/spin.png";
import uber from "../assets/images/uber.png";
import lyft from "../assets/images/lyft.png";
import blacklane from "../assets/images/blacklane.png";

import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function linkedaccounts() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
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
          Connected Services
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 32,
          }}
        >
          Linked accounts
        </Text>
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 16,
          }}
        >
          Enable toggles to connect the roam app
        </Text>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={lime} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Lime
            </Text>
          </View>

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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={veo} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Veo
            </Text>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={spin} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Spin
            </Text>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={uber} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Uber
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled3 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={lyft} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Lyft
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled4 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch4}
            value={isEnabled4}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Avatar rounded source={blacklane} size={54} />
            <Text
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              Blacklane
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled5 ? "white" : "#f4f4f4"}
            onValueChange={toggleSwitch5}
            value={isEnabled5}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 100,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
