import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

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
      colors={["#5B21B6", "#6D28D9", "#7C3AED"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1 justify-center px-6"
    >
      <Text className="text-3xl font-extrabold text-white text-center mb-8">
        Wish-Verse ✨
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#ddd"
        value={name}
        onChangeText={setName}
        className="h-12 border border-white/50 rounded-lg px-4 text-white mb-4"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ddd"
        value={email}
        onChangeText={setEmail}
        className="h-12 border border-white/50 rounded-lg px-4 text-white mb-4"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ddd"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="h-12 border border-white/50 rounded-lg px-4 text-white mb-4"
      />

      {error ? (
        <Text className="text-red-300 text-center mb-4">{error}</Text>
      ) : null}

      <TouchableOpacity
        onPress={handleSignUp}
        className="h-12 bg-white rounded-lg justify-center items-center mt-2"
      >
        <Text className="text-purple-900 font-semibold text-base">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)")} className="mt-4">
        <Text className="text-white text-center">
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
