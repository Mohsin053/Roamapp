import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../utils/navSlice";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";
import { Header } from "../components/Header";
import { RoundedButton } from "../components/RoundedButton";
import { RecentSearchItem } from "../components/RecentSearchItem";
import { GoogleSearchInput } from "../components/GoogleSearchInput";

export default function setLocation() {
  const { Location } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [originPlace, setOriginPlace] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const checkNavigation = () => {
    if (originPlace) {
      if (Location === "1") {
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
    <View style={styles.parentView}>
      {/*Header */}
      <Header
        title={Location === "1" ? "Pick up Location" : "Dropoff Location"}
      />

      {/*input google tab */}
      <View style={{ gap: 12, marginTop: 20 }}>
        <GoogleSearchInput
          placeholder={Location === "1" ? "Pick Up" : "Destination"}
          onPlaceSelected={(data, details) =>
            setOriginPlace({
              name: details.formatted_address,
              location: details.geometry.location,
              description: data.description,
            })
          }
          APIKey={GOOGLE_MAPS_APIKEY}
        />

        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          <RoundedButton icon="home" label="Home" onPress={() => {}} />
          <RoundedButton icon="briefcase" label="Office" onPress={() => {}} />
          <RoundedButton
            icon="location"
            label="Main road street"
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      {/*input google tab */}

      {/*upper tab */}
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchTitle}>Recent Searches</Text>
        <View style={{ gap: 24 }}>
          {["Bobst Library", "Main Street"].map((title, index) => (
            <RecentSearchItem
              key={index}
              title={title}
              subtitle="Newyork - Main road street 2, near..."
              onPress={() => {}}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  recentSearchContainer: {
    marginTop: 24,
    backgroundColor: "white",
    borderRadius: 24,
    padding: 20,
    gap: 24,
  },
  recentSearchTitle: {
    color: "black",
    fontSize: 20,
  },
});
