import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import AvatarImg from "../assets/images/img1.png";
import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function profile() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          User Profile
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>
      {/*Profile Card View */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Avatar rounded source={AvatarImg} size={110} />
        <TouchableOpacity
          style={{
            marginLeft: 60, // Adjusts position to the right of the avatar
            top: -35, // Adjusts vertical position to be at the bottom-right corner of the avatar
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "black",
          }}
        >
          <Ionicons
            name="camera-outline"
            size={25}
            style={{
              color: "white",
              borderRadius: 20,
              padding: 5,
            }}
          />
        </TouchableOpacity>
      </View>

      {/*Button Card View */}

      <View style={{ top: -35 }}>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={"edit"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Edit Account
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"shield-checkmark-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Preferences
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => router.navigate("notifications")}
        >
          <Ionicons
            name={"notifications-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Notifications
          </Text>
          <View
            style={{
              marginLeft: "auto",
              height: 24,
              paddingHorizontal: 8,
              backgroundColor: "#FF5656",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "light",
                fontSize: 16,
              }}
            >
              +9
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"git-network-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Connected Services
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather
            name={"external-link"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Matric Units
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#5EF188" }}
            thumbColor={isEnabled ? "white" : "#f4f4f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"wallet-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Payment Methods
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"language-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Language
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"trash-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Delete Account
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={"information-circle-outline"}
            color={"black"}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "light",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            About Roam
          </Text>
          <Ionicons
            name={"chevron-forward"}
            color={"black"}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#A0A0A0",
          fontWeight: "medium",
          fontSize: 11,
          textAlign: "center",
          top: -35,
        }}
      >
        11.451.12 version
      </Text>
      {/*Swictch button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#F7F7F7",
          height: 58,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 60,
          flexDirection: "row",
          gap: 10,
          top: -35,
        }}
        onPress={() => router.navigate("login")}
      >
        <Ionicons name={"log-out-outline"} color={"#FF5656"} size={24} />
        <Text
          style={{
            color: "#FF5656",
            fontWeight: "medium",
            fontSize: 16,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
