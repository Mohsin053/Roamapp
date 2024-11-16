import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  setTravelTimeInformation,
} from "../utils/navSlice";
import { useRouter } from "expo-router";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

const data = [
  {
    id: "1",
    image: require("../assets/images/uberx.png"),
    name: "Uber X",
    people: 4,
    time: "5 mins away",
    type: "cheaper",
    price: "$7.89",
  },
  {
    id: "2",
    image: require("../assets/images/Blacklanecar.png"),
    name: "BlackLane",
    people: 4,
    time: "5 mins away",
    type: "premium",
    price: "$18.99",
  },
  {
    id: "3",
    image: require("../assets/images/lyftcar.png"),
    name: "lyft",
    people: 4,
    time: "5 mins away",
    type: "faster",
    price: "$7.89",
  },
];

export default function LocationSheet() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const [distance, setDistance] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const router = useRouter();
  const [showRides, setShowRides] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Car");
  const [selectedCar, setSelectedCar] = useState(data[0]); // To track selected car

  useEffect(() => {
    if (!origin || !destination === null) return;
    const getTravelTime = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${origin.location.lng}&key=${GOOGLE_MAPS_APIKEY}`,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );

        const response = await res.json();
        setDistance(response.rows[0].elements[0].distance.text);
        setTravelTime(response.rows[0].elements[0].duration.text);
        dispatch(setTravelTimeInformation(response.rows[0].elements[0]));
      } catch (err) {
        console.log(err);
      }
    };
    getTravelTime();
  }, [origin, destination]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        borderRadius: 16,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 10,
        height: 95,
        gap: 5,
        alignItems: "center",
        borderColor: selectedCar === item ? "black" : "#f3f3f3",
        borderWidth: 1,
        marginBottom: 10,
      }}
      onPress={() => setSelectedCar(item)} // Set selected car on press
    >
      <Image source={item.image} resizeMode="contain" />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          height: "100%",
          marginLeft: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 18,
              marginRight: 10,
            }}
          >
            {item.name}
          </Text>
          <Ionicons name={"person"} color={"black"} size={14} />
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            {item.people}
          </Text>
        </View>

        <Text
          style={{
            color: "black",
            fontWeight: "medium",
            fontSize: 12,
          }}
        >
          {item.time}
        </Text>
        <View
          style={{
            backgroundColor: "#5EF188",
            padding: 5,
            borderRadius: 39,
            flexDirection: "row",
            width: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 11,
            }}
          >
            {item.type}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "black",
          fontWeight: "medium",
          fontSize: 15,
        }}
      >
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      {showRides ? (
        <View
          style={{
            backgroundColor: "white",
            height: "60%",
            padding: 20,
            gap: 15,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "medium",
              fontSize: 20,
            }}
          >
            Available Options
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#f4f4f4",
              padding: 6,
              borderRadius: 100,
            }}
          >
            {["Car", "Scooter", "Bike"].map((tab) => (
              <Pressable
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={{
                  height: 46,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  backgroundColor: selectedTab === tab ? "#3fe0d0" : "#f4f4f4",
                  elevation: selectedTab === tab ? 2 : 0,
                  flex: 1,
                }}
              >
                <Text style={{ color: "black", fontSize: 16 }}>{tab}</Text>
              </Pressable>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            {selectedTab === "Car" && (
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            )}
            {selectedTab === "Scooter" && (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 16 }}>
                  No Scooters Available
                </Text>
              </View>
            )}
            {selectedTab === "Bike" && (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 16 }}>
                  No Bikes Available
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={{
              height: 58,
              borderRadius: 800,
              backgroundColor: "#3fe0d0",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => router.navigate("ridedetails")}
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,
              }}
            >
              Choose {selectedCar.name}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "white",
          }}
        >
          <ScrollView
            style={{ padding: 20 }}
            contentContainerStyle={{
              flexGrow: 1,
              rowGap: 15,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
              onPress={() =>
                router.push({
                  pathname: "/setLocation",
                  params: { Location: 1 },
                })
              }
            >
              <MaterialCommunityIcons
                name={"record-circle"}
                color={"#00A76F"}
                size={24}
              />
              <View
                style={{
                  justifyContent: "center",
                  borderRadius: 69,
                  backgroundColor: "#f4f4f4",
                  paddingHorizontal: 20,
                  height: 58,
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "light",
                    fontSize: 16,
                  }}
                >
                  {origin ? origin.name.substring(0, 35) + "..." : "Pick Up"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
              onPress={() =>
                router.push({
                  pathname: "/setLocation",
                  params: { Location: 2 },
                })
              }
            >
              <MaterialCommunityIcons
                name={"record-circle"}
                color={"#FF4C4C"}
                size={24}
              />
              <View
                style={{
                  justifyContent: "center",
                  borderRadius: 69,
                  backgroundColor: "#f4f4f4",
                  paddingHorizontal: 20,
                  height: 58,
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "light",
                    fontSize: 16,
                  }}
                >
                  {destination
                    ? destination.name.substring(0, 35) + "..."
                    : "Destination"}
                </Text>
              </View>
            </TouchableOpacity>

            {origin && destination && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 69,
                  flex: 1,
                  backgroundColor: "#f4f4f4",
                  height: 58,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "light",
                    fontSize: 16,
                  }}
                >
                  {distance} - {travelTime}
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={{
                height: 58,
                borderRadius: 800,
                backgroundColor: "#3fe0d0",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setShowRides(!showRides)}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                }}
              >
                Find ride
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
