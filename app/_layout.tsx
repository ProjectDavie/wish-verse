import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
