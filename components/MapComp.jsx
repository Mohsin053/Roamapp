import { useRef, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../utils/navSlice";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";
import * as Location from "expo-location";
import AvatarImg from "../assets/images/img1.png";
import { useRouter } from "expo-router";
import { Avatar } from "@rneui/themed";

export default function MapComp() {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        // Get user's current location
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
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

  useEffect(() => {
    if (!origin || !destination == null) return;

    var i = setInterval(() => {
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 100,
          right: 100,
          left: 100,
          bottom: 100,
          animated: true,
        },
      });
      clearInterval(i);
    }, 50);
  }, [origin, destination]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          zIndex: 10,
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.navigate("profile")}>
          <Avatar rounded source={AvatarImg} size={58} />
        </TouchableOpacity>
      </View>

      {/* <View
          style={{
            zIndex: 10,
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 58,
              width: 58,
              backgroundColor: "#3fe0d0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
            onPress={() => router.navigate("notifications")}
          >
            <Ionicons
              name={"notifications-outline"}
              color={"black"}
              size={30}
            />
          </TouchableOpacity>
        </View> */}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
        }}
        showsCompass={false}
        maxZoomLevel={1000}
        ref={mapRef}
        showsUserLocation={origin && destination ? false : true}
        region={{
          latitude: userLocation?.latitude || 28.456312,
          longitude: userLocation?.longitude || -16.252929,
          latitudeDelta: 0.001,
          longitudeDelta: 0.01,
        }}
      >
        {!origin && (
          <Marker
            coordinate={{
              latitude: userLocation?.latitude || 28.456312,
              longitude: userLocation?.longitude || -16.252929,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0421,
            }}
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            description={origin.description}
            identifier="origin"
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
              strokeWidth={5}
              strokeColor="blue"
            />
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              description={destination.description}
              identifier="destination"
            />
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
