import { useRef, useState, useEffect } from "react";
import * as Location from "expo-location";
import MapComp from "../components/MapComp";
import LocationSheet from "../components/LocationSheet";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../utils/navSlice";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

import AvatarImg from "../assets/images/img1.png";
import { useRouter } from "expo-router";
import { Avatar } from "@rneui/themed";

const home = () => {
  const router = useRouter();
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

  // useEffect(() => {
  //   if (!origin?.location || !destination?.location) return;

  //   mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
  //     edgePadding: {
  //       top: 100,
  //       right: 100,
  //       bottom: 100,
  //       left: 100,
  //     },
  //     animated: true,
  //   });
  // }, [origin, destination]);

  // console.log("origin = ", origin);

  useEffect(() => {
    // console.log("Origin:", origin);
    // console.log("Destination:", destination);

    // Check if both origin and destination exist
    if (origin && destination) {
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 100,
          right: 100,
          left: 100,
          bottom: 100,
        },
      });
    } else if (origin) {
      // If only origin is available
      mapRef?.current?.fitToCoordinates(
        [
          {
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          },
        ],
        {
          edgePadding: {
            top: 100,
            right: 100,
            left: 100,
            bottom: 100,
          },
          animated: true,
        }
      );
    } else if (destination) {
      // If only destination is available
      mapRef?.current?.fitToCoordinates(
        [
          {
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          },
        ],
        {
          edgePadding: {
            top: 100,
            right: 100,
            left: 100,
            bottom: 100,
          },
          animated: true,
        }
      );
    }
  }, [origin, destination]);

  // if (!userLocation) {
  //   return (
  //     <ActivityIndicator
  //       size="large"
  //       color="#3fe0d0"
  //       style={{ flex: 1, alignSelf: "center" }}
  //     />
  //   );
  // }

  return (
    <>
      {/* Map */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.iconButton}>
          <TouchableOpacity onPress={() => router.navigate("profile")}>
            <Avatar rounded source={AvatarImg} size={58} />
          </TouchableOpacity>
        </View>

        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{
            flex: 1,
          }}
          showsCompass={false}
          showsUserLocation={origin && destination ? false : true}
          maxZoomLevel={20}
          region={{
            latitude:
              origin?.location?.lat ||
              destination?.location?.lat ||
              userLocation?.latitude ||
              28.456312,
            longitude:
              origin?.location?.lng ||
              destination?.location?.lat ||
              userLocation?.longitude ||
              -16.252929,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              description={origin.description}
              identifier="origin"
              pinColor="#00A76F"
            />
          )}
          {destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              description={destination.description}
              identifier="destination"
              pinColor="#FF4C4C"
            />
          )}
          {origin && destination && (
            <>
              <Marker
                coordinate={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
                }}
                description={destination.description}
                identifier="origin"
                pinColor="#00A76F"
              />
              <MapViewDirections
                origin={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
                }}
                destination={{
                  latitude: destination.location.lat,
                  longitude: destination.location.lng,
                }}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="black"
              />
              <Marker
                coordinate={{
                  latitude: destination.location.lat,
                  longitude: destination.location.lng,
                }}
                description={destination.description}
                identifier="destination"
                pinColor="#FF4C4C"
              />
            </>
          )}
        </MapView>
      </View>
      {/* Bottom View */}
      <LocationSheet />
    </>
  );
};
const styles = StyleSheet.create({
  iconButton: {
    zIndex: 10,
    position: "absolute",
    top: 20,
    left: 20,
  },
});

export default home;
