import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setError("");
    router.replace("/home");
  };

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]}
      style={styles.container}
    >
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#ddd"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

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

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    fontSize: 28,
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
  error: {
    color: "#ffcccc",
    textAlign: "center",
    marginBottom: 12,
  },
});
