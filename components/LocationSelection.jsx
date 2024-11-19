import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export const LocationSelection = ({
  origin,
  destination,
  distance,
  travelTime,
  setShowRides,
}) => {
  const router = useRouter();

  // Validation Function
  const handleFindRide = () => {
    if (!origin || !destination) {
      Toast.show({
        type: "info", // Use "success", "error", or "info" by default
        text1: "Location Missing!",
        text2: "Please select both origin and destination.",
      });
      return;
    }
    setShowRides(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Origin Input */}
        <TouchableOpacity
          style={styles.locationInputContainer}
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
          <View style={styles.locationInput}>
            <Text style={styles.locationText}>
              {origin ? origin.name.substring(0, 35) + "..." : "Pick Up"}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Destination Input */}
        <TouchableOpacity
          style={styles.locationInputContainer}
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
          <View style={styles.locationInput}>
            <Text style={styles.locationText}>
              {destination
                ? destination.name.substring(0, 35) + "..."
                : "Destination"}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Distance and Travel Time */}
        {origin && destination && (
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>
              {distance} - {travelTime}
            </Text>
          </View>
        )}

        {/* Find Ride Button */}
        <TouchableOpacity
          style={styles.findRideButton}
          onPress={handleFindRide} // Use the validation function here
        >
          <Text style={styles.findRideText}>Find ride</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  scrollViewContent: {
    padding: 20,
    flexGrow: 1,
    gap: 15,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationInput: {
    justifyContent: "center",
    borderRadius: 69,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    height: 58,
    flex: 1,
  },
  locationText: {
    color: "black",
    fontWeight: "medium", // Use numerical weight for consistency
    fontSize: 16,
  },
  distanceContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 69,
    backgroundColor: "#f4f4f4",
    height: 58,
    flex: 1,
  },
  distanceText: {
    color: "black",
    fontWeight: "300",
    fontSize: 16,
  },
  findRideButton: {
    height: 58,
    borderRadius: 800,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
  },
  findRideText: {
    color: "black",
    fontSize: 16,
  },
});
