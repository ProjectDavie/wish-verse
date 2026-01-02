import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerifyScreen() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (!input) {
      setError("Please enter something to continue");
      return;
    }

    setError("");
    router.replace("/(authenticated)/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify</Text>

      <TextInput
        placeholder="Enter to verify"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 32 },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  error: { color: "red", textAlign: "center", marginBottom: 12 },
});
