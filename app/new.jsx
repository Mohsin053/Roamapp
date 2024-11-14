import { useRef, useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";

import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

const HomeScreen = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={{
          height: "50%",
          flex: 1,
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: "50%",
          }}
          showsCompass={false}
          region={{
            latitude: 28.456312,
            longitude: -16.252929,
            latitudeDelta: 0.001,
            longitudeDelta: 0.01,
          }}
          maxZoomLevel={1000}
          ref={mapRef}
        ></MapView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default HomeScreen;
