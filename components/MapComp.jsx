import { useRef, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

import AvatarImg from "../assets/images/img1.png";
import { useRouter } from "expo-router";
import { Avatar } from "@rneui/themed";

export default function MapComp({ userLocation, mapRef, origin, destination }) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 100,
          right: 100,
          left: 100,
          bottom: 100,
        },
      });
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [origin, destination]);

  return (
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
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
        }}
        showsCompass={false}
        maxZoomLevel={1000}
        showsUserLocation={origin && destination ? false : true}
        region={{
          latitude: userLocation?.latitude || 28.456312,
          longitude: userLocation?.longitude || -16.252929,
          latitudeDelta: 0.001,
          longitudeDelta: 0.01,
        }}
        ref={mapRef}
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
            />
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    zIndex: 10,
    position: "absolute",
    top: 20,
    left: 20,
  },
});
