import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import AvatarImg from "../assets/images/img1.png";
import { useRouter } from "expo-router";
import { Avatar } from "@rneui/themed";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function home() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
      }}
    >
      {/*upper tab */}
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={() => router.navigate("profile")}>
            <Avatar rounded source={AvatarImg} size={58} />
          </TouchableOpacity>
          <View
            style={[
              {
                flexDirection: "row",
                backgroundColor: "#f4f4f4",
                borderRadius: 69,
                flex: 1,
              },
            ]}
          >
            <TextInput
              style={styles.textInput2}
              placeholder="Search"
              secureTextEntry={!showPassword}
              placeholderTextColor={"#101828"}
              returnKeyType="done"
              maxLength={100}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.iconView}>
              <Ionicons name={"search-outline"} size={24} color={"#667085"} />
            </View>
          </View>
        </View>

        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "#f7f7f7",
              borderRadius: 100,
              flexDirection: "row",
              paddingHorizontal: 17,
              paddingVertical: 10,
              gap: 8,
            }}
          >
            <Ionicons name={"home"} size={20} color={"black"} />
            <Text style={{ color: "black", fontSize: 16 }}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "#f7f7f7",
              borderRadius: 100,
              flexDirection: "row",
              paddingHorizontal: 17,
              paddingVertical: 10,
              gap: 8,
            }}
          >
            <Ionicons name={"briefcase"} size={20} color={"black"} />
            <Text style={{ color: "black", fontSize: 16 }}>Office</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "#f7f7f7",
              borderRadius: 100,
              flexDirection: "row",
              paddingHorizontal: 17,
              paddingVertical: 10,
              gap: 8,
            }}
          >
            <Ionicons name={"location"} size={20} color={"black"} />
            <Text style={{ color: "black", fontSize: 16 }}>
              Main road street
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/*upper tab */}
      <View style={{ marginTop: 40 }}>
        <Text style={{ color: "black", fontSize: 16 }}>Map will show here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput2: {
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 69,
    height: 58,
    flex: 1,
    color: "#101828",
  },
  iconView: {
    height: 58,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});




import { StyleSheet, View, Text } from "react-native";
import React, { useCallback, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MapComp from "../components/MapComp";
import LocationSheet from "../components/LocationSheet";

const home = () => {
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  return (
    <>
      {/*Map */}
      <MapComp />

      {/*Bottom View */}
      <LocationSheet />
      {/* 
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["50%"]}
        enableDynamicSizing={false}
        backgroundStyle={{
          borderRadius: 50,
          backgroundColor: "#17191B",
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet> */}

      {/* <CommentModal
        isOpen={isTermsModalOpen}
        onClose={handleCloseTermsModal}
        bottomSheetModalRef={bottomSheetModalRef}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default home;
