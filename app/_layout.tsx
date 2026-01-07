import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

// 🔒 Keep the native splash screen visible
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000); // ⏱️ 5 seconds splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
