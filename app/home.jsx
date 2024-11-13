import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
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
