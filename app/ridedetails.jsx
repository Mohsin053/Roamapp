import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import car from "../assets/images/car.png";
import AvatarImg from "../assets/images/img1.png";
import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function ridedetails() {
  const router = useRouter();

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
          Ride Details
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>

      <View
        style={{
          gap: 10,
        }}
      >
        {/*car  details  */}
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Nissan Patrol
        </Text>
        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 14,
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Washington - White
        </Text>

        {/*Image */}
        <Image
          source={car}
          style={{
            height: 146,
            width: 300,
            alignSelf: "center",
          }}
          resizeMode="contain"
        />

        {/*driver details  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Avatar rounded source={AvatarImg} size={40} />
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "medium",
                  fontSize: 16,
                }}
              >
                David
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name={"star"} color={"#FF9E0D"} size={20} />
                <Text
                  style={{
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 14,
                    opacity: 0.6,
                  }}
                >
                  4.9 (122)
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 30,
              backgroundColor: "#f4f4f4",
              alignItems: "center",
              borderRadius: 100,
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: "black",
                fontWeight: "medium",
              }}
            >
              5 mins away
            </Text>
          </View>
        </View>
        {/*driver details  */}

        {/*Ride Summary details  */}
        <View
          style={{
            marginTop: 20,
            gap: 16,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "medium",
            }}
          >
            Ride Summary
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 20 }}
            >
              <Ionicons name={"ellipse"} color={"#54E17B"} size={20} />
              <View>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 13,
                  }}
                >
                  Bobst Library
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 14,
                    opacity: 0.6,
                  }}
                >
                  70 Washington Square ...
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: "black",
                fontWeight: "medium",
                fontSize: 14,
              }}
            >
              10:00 AM
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 20 }}
            >
              <Ionicons name={"ellipse"} color={"#F64336"} size={20} />
              <View>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 13,
                  }}
                >
                  Bobst Library
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 14,
                    opacity: 0.6,
                  }}
                >
                  70 Washington Square ...
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: "black",
                fontWeight: "medium",
                fontSize: 14,
              }}
            >
              10:00 AM
            </Text>
          </View>
        </View>
        {/*Ride Summary details  */}

        <View
          style={{
            borderBottomColor: "#f4f4f4",
            borderBottomWidth: 2,
            marginTop: 20,
          }}
        />
      </View>

      {/*Cost Summary details  */}
      <View
        style={{
          gap: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 13,
              opacity: 0.6,
            }}
          >
            Estimated time travel
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            15 min
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 13,
              opacity: 0.6,
            }}
          >
            Ride subtotal
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            $7.89
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 13,
              opacity: 0.6,
            }}
          >
            Tax %
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            $0.11
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 13,
              opacity: 0.6,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            $8.00
          </Text>
        </View>
      </View>
      {/*Cost Summary details  */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("paymentmethod")}
      >
        <Text style={styles.buttonText}>Book now</Text>
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
