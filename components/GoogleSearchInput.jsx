import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export const GoogleSearchInput = ({ placeholder, onPlaceSelected, APIKey }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={(data, details = null) => onPlaceSelected(data, details)}
      fetchDetails
      styles={{
        container: { flex: 0 },
        textInput: {
          paddingHorizontal: 20,
          fontSize: 14,
          borderRadius: 69,
          height: 58,
          flex: 1,
          color: "#101828",
        },
        row: { backgroundColor: "#FFFFFF", height: 45 },
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
        key: APIKey,
        language: "en",
      }}
    />
  );
};
