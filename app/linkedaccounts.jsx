import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";
import { Header } from "../components/Header";

// Reusable LinkedAccountItem Component
const LinkedAccountItem = ({
  avatarSource,
  label,
  isEnabled,
  toggleSwitch,
}) => {
  return (
    <View style={styles.listtab}>
      <View style={styles.innerListtab}>
        <Avatar rounded source={avatarSource} size={54} />
        <Text style={{ ...styles.textstyle, fontSize: 16 }}>{label}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#5EF188" }}
        thumbColor={isEnabled ? "white" : "#f4f4f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default function LinkedAccounts() {
  const [toggleStates, setToggleStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Toggle handler for switches
  const handleToggle = (index) => {
    setToggleStates((prevStates) =>
      prevStates.map((state, idx) => (idx === index ? !state : state))
    );
  };

  const accountData = [
    { id: 0, avatar: require("../assets/images/lime.png"), label: "Lime" },
    { id: 1, avatar: require("../assets/images/veo.png"), label: "Veo" },
    { id: 2, avatar: require("../assets/images/spin.png"), label: "Spin" },
    { id: 3, avatar: require("../assets/images/uber.png"), label: "Uber" },
    { id: 4, avatar: require("../assets/images/lyft.png"), label: "Lyft" },
    {
      id: 5,
      avatar: require("../assets/images/blacklane.png"),
      label: "Blacklane",
    },
  ];

  return (
    <ScrollView
      style={styles.mainScroll}
      contentContainerStyle={{ rowGap: 30 }}
    >
      {/* Header */}
      <Header title={"Connected Services"} />

      {/* Text View */}
      <View style={styles.textView}>
        <Text style={{ ...styles.textstyle, fontSize: 32 }}>
          Linked accounts
        </Text>
        <Text style={{ ...styles.textstyle, fontSize: 16 }}>
          Enable toggles to connect the roam app
        </Text>
      </View>

      {/* Account List */}
      <View style={{ gap: 16 }}>
        {accountData.map((account, index) => (
          <LinkedAccountItem
            key={account.id}
            avatarSource={account.avatar}
            label={account.label}
            isEnabled={toggleStates[index]}
            toggleSwitch={() => handleToggle(index)}
          />
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainScroll: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  textstyle: {
    color: "black",
    fontWeight: "medium",
  },
  listtab: {
    height: 58,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  innerListtab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
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
