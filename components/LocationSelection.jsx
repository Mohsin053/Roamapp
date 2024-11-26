import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

export const LocationSelection = ({
  origin,
  destination,
  setDestination,
  setOrigin,
  distance,
  travelTime,
  setShowRides,
  openLocationModal,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const handleCancel = () => {
    Alert.alert("Cancel Ride?", "Are you sure you want to cancel?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          dispatch(setOrigin(null));
          dispatch(setDestination(null));
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Origin Input */}
        <TouchableOpacity
          style={styles.locationInputContainer}
          onPress={() => openLocationModal("origin")}
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
          onPress={() => openLocationModal("destination")}
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
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={styles.findRideButton2}
            onPress={handleCancel} // Use the validation function here
          >
            <Text style={styles.findRideText}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.findRideButton}
            onPress={handleFindRide} // Use the validation function here
          >
            <Text style={styles.findRideText}>Find ride</Text>
          </TouchableOpacity>
        </View>
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
    gap: 10,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: "black",
    fontWeight: "medium",
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationInput: {
    justifyContent: "center",
    borderRadius: 69,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    height: 50,
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
    height: 50,
    flex: 1,
  },
  distanceText: {
    color: "black",
    fontWeight: "300",
    fontSize: 16,
  },
  findRideButton: {
    height: 58,
    borderRadius: 69,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  findRideButton2: {
    height: 58,
    borderRadius: 69,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  findRideText: {
    color: "black",
    fontSize: 16,
  },
});
