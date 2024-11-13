import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    if (name.trim() === "" || password.trim() === "") {
      setErrorMessage("Please fill all fields");
    } else {
      router.navigate("home");
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
      }}
      contentContainerStyle={{
        rowGap: 16,
      }}
    >
      <TouchableOpacity
        style={{
          height: 46,
          backgroundColor: "#f4f4f4",
          alignItems: "center",
          borderRadius: 100,
          justifyContent: "center",
          width: 75,
          marginLeft: "auto",
        }}
        onPress={() => router.navigate("login")}
      >
        <Text>Forgot?</Text>
      </TouchableOpacity>

      <Text style={{ color: "black", fontSize: 32 }}>Sign In </Text>

      <Text style={{ color: "black", fontSize: 16 }}>
        Welcome Back to Roam! please enter the details to continue
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={"black"}
        returnKeyType="done"
        maxLength={100}
        onChangeText={(text) => setName(text)}
      />
      <View
        style={[
          {
            flexDirection: "row",
            backgroundColor: "#f4f4f4",
            borderRadius: 16,
          },
        ]}
      >
        <TextInput
          style={styles.textInput2}
          placeholder="Password"
          secureTextEntry={!showPassword}
          placeholderTextColor={"#101828"}
          returnKeyType="done"
          maxLength={100}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={"#667085"}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#3fe0d0" : undefined}
        />
        <Text>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      <Text style={{ fontSize: 13, textAlign: "center", color: "#3c3c43" }}>
        OR
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 58,
            gap: 10,
            backgroundColor: "#f4f4f4",
            alignItems: "center",
            borderRadius: 100,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Ionicons size={24} name="logo-google" style={{ color: "#3fe0d0" }} />
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 58,
            gap: 10,
            backgroundColor: "#f4f4f4",
            alignItems: "center",
            borderRadius: 100,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Ionicons size={24} name="logo-apple" style={{ color: "#12131A" }} />
          <Text>Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newAction}>
        <Text style={styles.newActionText1}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => router.navigate("signup")}>
          <Text style={styles.newActionText2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 16,
    height: 58,
    color: "#101828",
    backgroundColor: "#f4f4f4",
  },
  button: {
    height: 58,
    borderRadius: 800,
    backgroundColor: "#3fe0d0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  errorText: {
    color: "#F04438",
    textAlign: "center",
    fontSize: 13,
  },
  newAction: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 30,
    marginBottom: 50,
  },
  newActionText1: {
    color: "#777777",
    fontSize: 13,
  },
  newActionText2: {
    color: "black",
    fontSize: 13,
    marginLeft: 5,
  },
  textInput2: {
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 16,
    height: 58,
    flex: 1,
    color: "#101828",
  },
  iconView: {
    height: 58,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    borderRadius: 10,
  },
});
