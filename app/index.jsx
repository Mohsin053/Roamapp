import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function onBoarding() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const handleNextPress = () => {
    if (page === 1) {
      setPage(2);
    } else {
      router.navigate("login");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 16,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <View
            style={{
              width: 20,
              height: 11,
              borderRadius: 11,
              backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: 20,
              height: 11,
              borderRadius: 11,
              backgroundColor: page === 2 ? "black" : "#f4f4f4",
            }}
          />
          <Text style={{ fontSize: 13, marginLeft: 10 }}>{page}/2</Text>
        </View>

        <TouchableOpacity
          style={{
            height: 46,
            backgroundColor: "#f4f4f4",
            alignItems: "center",
            borderRadius: 100,
            justifyContent: "center",
            width: 75,
          }}
          onPress={() => router.navigate("home")}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={
          page === 2
            ? require("../assets/images/onboarding2.png")
            : require("../assets/images/onboarding1.png")
        }
        style={{
          height: 280,
          width: 300,
          alignSelf: "center",
          marginBottom: 16,
        }}
        resizeMode="contain"
      />
      <View style={{ gap: 16 }}>
        {page === 2 ? (
          <Text style={{ color: "black", fontSize: 32, textAlign: "center" }}>
            One App For All of Your Rides
          </Text>
        ) : (
          <Text style={{ color: "black", fontSize: 32, textAlign: "center" }}>
            One App For All of Your Rides
          </Text>
        )}

        <Text style={{ color: "black", fontSize: 16, textAlign: "center" }}>
          From scooters to Ubers we've got you covered.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 100,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
