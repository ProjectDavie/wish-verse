import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // clear user from context
    router.replace("/(auth)"); // navigate to login page
  };

  return (
    <Pressable
      onPress={handleLogout}
      className="bg-black px-4 py-2 rounded-lg items-center justify-center"
    >
      <Text className="text-white font-bold text-base">Logout</Text>
    </Pressable>
  );
}
