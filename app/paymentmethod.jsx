import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import mastercard from "../assets/images/mastercard.png";

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
];

const paymentMethods = [
  {
    id: "1",
    name: "Apple",
    icon: "apple",
  },
  {
    id: "2",
    name: "Cash",
    icon: "dollar",
  },
];

export default function paymentmethod() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f7f7f7",
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
          backgroundColor: "white",
          borderRadius: 24,
          padding: 20,
          gap: 24,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Select Card</Text>
        <View style={{ gap: 24 }}>
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                height: 40,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F4F4F4",
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Image source={mastercard} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "light",
                    fontSize: 16,
                    marginLeft: 15,
                  }}
                >
                  Mater card .... 5456
                </Text>
                <Text
                  style={{
                    color: "black",
                    opacity: 0.6,
                    fontWeight: "light",
                    fontSize: 14,
                    marginLeft: 15,
                  }}
                >
                  Expiration 29/2030
                </Text>
              </View>
              <Checkbox
                style={styles.checkbox}
                value={selectedId === item.id}
                onValueChange={() => setSelectedId(item.id)}
                color={selectedId === item.id ? "#3fe0d0" : undefined}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add new method</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*upper tab */}
      <View
        style={{
          marginTop: 24,
          backgroundColor: "white",
          borderRadius: 24,
          padding: 20,
          gap: 24,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Pay With</Text>
        <View style={{ gap: 24 }}>
          {paymentMethods.map((method) => (
            <View
              key={method.id}
              style={{
                height: 40,
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F4F4F4",
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <FontAwesome name={method.icon} color={"black"} size={24} />
              </View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={{ color: "black", fontSize: 16 }}>
                  {method.name}
                </Text>
              </View>
              <Checkbox
                style={styles.checkbox}
                value={selectedId1 === method.id}
                onValueChange={() => setSelectedId1(method.id)}
                color={selectedId1 === method.id ? "#3fe0d0" : undefined}
              />
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => router.navigate("bookingmessage")}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
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
    height: 46,
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
    marginVertical: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
