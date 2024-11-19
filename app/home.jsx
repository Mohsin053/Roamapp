import { useRef, useState, useEffect } from "react";
import * as Location from "expo-location";
import MapComp from "../components/MapComp";
import LocationSheet from "../components/LocationSheet";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../utils/navSlice";
import { ActivityIndicator } from "react-native";

const home = () => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.log("Error getting location:", error);
      }
    };

    getLocation();
  }, []);

  if (!userLocation) {
    return (
      <ActivityIndicator
        size="large"
        color="#3fe0d0"
        style={{ flex: 1, alignSelf: "center" }}
      />
    );
  }

  return (
    <>
      {/* Map */}
      <MapComp
        userLocation={userLocation}
        mapRef={mapRef}
        origin={origin}
        destination={destination}
      />
      {/* Bottom View */}
      <LocationSheet />
    </>
  );
};

export default home;
