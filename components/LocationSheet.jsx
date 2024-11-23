import { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  setTravelTimeInformation,
} from "../utils/navSlice";
import { RidesList } from "./RidesList"; // Import the RidesList Component
import { LocationSelection } from "./LocationSelection"; // Import the LocationSelection Component

const GOOGLE_MAPS_APIKEY = "AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0";

export default function LocationSheet() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const [showRides, setShowRides] = useState(false);

  const data = [
    {
      id: "1",
      name: "Uber X",
      namepic: require("../assets/images/uberxtext.png"),
      type: "Luxury",
      time: "1:10 pm",
      price: "$98.65",
      people: 2,
      image: require("../assets/images/uberx.png"),
    },
    {
      id: "2",
      name: "BLACKLANE",
      namepic: require("../assets/images/blacklanetext.png"),
      type: "Luxury",
      time: "1:10 pm",
      price: "$98.65",
      people: 2,
      image: require("../assets/images/lyftcar.png"),
    },
    {
      id: "3",
      name: "Lyft",
      namepic: require("../assets/images/lyfttext.png"),
      type: "Luxury",
      time: "1:10 pm",
      price: "$98.65",
      people: 2,
      image: require("../assets/images/Blacklanecar.png"),
    },
  ];

  const [selectedCar, setSelectedCar] = useState(data[0]);
  const [selectedTab, setSelectedTab] = useState("Car");

  useEffect(() => {
    // Run only if origin and destination are both not null
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${destination.location.lng}&key=${GOOGLE_MAPS_APIKEY}`,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );

        const response = await res.json();
        setDistance(response.rows[0].elements[0].distance.text);
        setTravelTime(response.rows[0].elements[0].duration.text);
        dispatch(setTravelTimeInformation(response.rows[0].elements[0]));
      } catch (err) {
        console.error("Error fetching travel time:", err);
      }
    };

    getTravelTime();
  }, [origin, destination, dispatch]); // Added dispatch to dependency array

  return (
    <View style={{ backgroundColor: "transparent" }}>
      {showRides ? (
        <RidesList
          data={data}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setShowRides={setShowRides}
        />
      ) : (
        <LocationSelection
          origin={origin}
          destination={destination}
          distance={distance}
          travelTime={travelTime}
          setShowRides={setShowRides}
        />
      )}
    </View>
  );
}
