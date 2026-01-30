import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  // ✅ If logged in, LEAVE auth screens
  if (isAuthenticated) {
    return <Redirect href="/(authenticated)/(tabs)/home" />;
  }

  // ❌ If not logged in, stay in auth flow
  return <Stack screenOptions={{ headerShown: false }} />;
}
