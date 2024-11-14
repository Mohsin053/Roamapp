import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../utils/navSlice";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

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

export default function setLocation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [originPlace, setOriginPlace] = useState(null);
  const [Location, setLocation] = useState(1);
  const checkNavigation = () => {
    if (originPlace) {
      if (Location === 1) {
        dispatch(setOrigin(originPlace));
      } else {
        dispatch(setDestination(originPlace));
      }
      router.navigate("home");
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace]);

  return (
    <View
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
          Pickup Location
        </Text>
        <Ionicons name={"chevron-back"} color={"transparent"} size={24} />
      </View>
      <View style={{ gap: 12, marginTop: 20 }}>
        <GooglePlacesAutocomplete
          placeholder={Location === 1 ? "Pick Up" : "Destination"}
          onPress={(data, details = null) => {
            setOriginPlace({
              name: details.formatted_address,
              location: details.geometry.location,
              description: data.description,
            });
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
          currentLocationLabel="Current location"
          // currentLocation={Location === 1 ? true : false}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              paddingHorizontal: 20,
              fontSize: 14,
              borderRadius: 69,
              height: 58,
              flex: 1,
              color: "#101828",
            },
            row: {
              backgroundColor: "#FFFFFF",
              height: 45,
            },
          }}
          textInputProps={{
            placeholderTextColor: "#101828",
            returnKeyType: "search",
          }}
          debounce={400}
          minLength={4}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "white",
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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
      <View
        style={{
          marginTop: 24,
          backgroundColor: "white",
          borderRadius: 24,
          padding: 20,
          gap: 24,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Recent Searches</Text>
        <View style={{ gap: 24 }}>
          {data.map((item) => (
            <TouchableOpacity
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
                <Ionicons name={"location"} color={"black"} size={24} />
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
                  Bobst Libraray
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
                  Newyork - Main road street 2, near...
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
