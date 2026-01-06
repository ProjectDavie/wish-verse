import { useAuth } from "@/context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // mock auth for now
    login(email || "test@wishverse.app");
  };

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]}
      className="flex-1 justify-center px-6"
    >
      <Text className="text-3xl font-bold text-white text-center mb-8">
        Wish-Verse
      </Text>

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

      <TouchableOpacity
        onPress={handleLogin}
        className="h-12 bg-white rounded-lg justify-center items-center mt-2"
      >
        <Text className="text-purple-700 font-semibold text-base">
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text className="text-white text-center mt-4">
          Create an account
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
