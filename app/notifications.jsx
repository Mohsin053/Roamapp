import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import AvatarImg from "../assets/images/img1.png";
import { Avatar } from "@rneui/themed";

const data = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
];

export default function Notifications() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("All");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        borderRadius: 24,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 15,
        height: 133,
        gap: 10,
      }}
    >
      <Avatar rounded source={AvatarImg} size={36} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 18,
          }}
        >
          Booking Cancelled
        </Text>
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 12,
          }}
        >
          You cancelled your booking Mercedes Benz. View your itinerary for
          details
        </Text>
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 12,
            opacity: 0.4,
          }}
        >
          Today 2:44 PM
        </Text>
      </View>
    </TouchableOpacity>
  );

  const ListFooterComponent = () => (
    <View style={{ gap: 25 }}>
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
            fontWeight: "300",
            fontSize: 18,
          }}
        >
          Notifications
        </Text>
        <TouchableOpacity
          onPress={() => router.navigate("notificationsettings")}
        >
          <Ionicons name={"settings-outline"} color={"black"} size={24} />
        </TouchableOpacity>
      </View>

      {/* Switch View Buttons */}
      <View style={{ flexDirection: "row", gap: 16 }}>
        {["All", "Read", "Unread"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={{
              height: 40,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              backgroundColor: selectedTab === tab ? "#3FE0D0" : "#f7f7f7",
            }}
          >
            <Text style={{ color: "black" }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditionally Render Content Based on Selected Tab */}
      <View>
        {selectedTab === "All" && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ gap: 15, marginBottom: 40 }}
          />
        )}
        {selectedTab === "Read" && <Text>Read Notifications</Text>}
        {selectedTab === "Unread" && <Text>Unread Notifications</Text>}
      </View>
    </View>
  );

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListFooterComponent={ListFooterComponent}
      style={{
        backgroundColor: "#f7f7f7",
        flex: 1,
        padding: 20,
      }}
    />
  );
}
