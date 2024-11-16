import { StyleSheet, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapComp from "../components/MapComp";
import LocationSheet from "../components/LocationSheet";

const home = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/*Map */}
      <MapComp />

      {/*Bottom View */}
      <LocationSheet />

      {/* <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["40%"]}
        backgroundStyle={{
          borderRadius: 50,
          backgroundColor: "#17191B",
        }}
      ></BottomSheet>
      <CommentModal
        isOpen={isTermsModalOpen}
        onClose={handleCloseTermsModal}
        bottomSheetModalRef={bottomSheetModalRef}
      /> */}
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

export default home;
