import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // later: real auth
    router.replace("/(authenticated)/(tabs)/home");
  };

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]}
      style={styles.container}
    >
      <Text style={styles.title}>Wish-Verse</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ddd"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ddd"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text style={styles.link}>Create an account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff80",
    borderRadius: 8,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#6a11cb",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
  },
});
