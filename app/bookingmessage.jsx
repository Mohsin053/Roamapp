import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function bookingmessage() {
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
          Payment method
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>

      {/*upper tab */}
      <View
        style={{
          marginTop: 24,
          gap: 24,
        }}
      >
        <View
          style={{
            height: 90,
            width: 90,
            backgroundColor: "#3FE0D0",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={"checkmark"} color={"black"} size={35} />
        </View>
        <Text style={{ color: "black", fontSize: 32 }}>
          Booking Confirmed Successfully!
        </Text>
      </View>
      <View style={{ gap: 16, marginTop: "auto", marginBottom: 50 }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.navigate()}
        >
          <Text style={styles.buttonText}>See trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("home")}
        >
          <Text style={styles.buttonText}>Go to home</Text>
        </TouchableOpacity>
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
  checkbox: {
    borderRadius: 10,
  },
  button: {
    height: 58,
    borderRadius: 800,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    height: 58,
    borderRadius: 800,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
