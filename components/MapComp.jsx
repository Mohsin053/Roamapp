import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";
import AvatarImg from "../assets/images/img1.png";
import { useRouter } from "expo-router";
import { Avatar } from "@rneui/themed";

export default function MapComp({ userLocation, mapRef, origin, destination }) {
  const router = useRouter();

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
