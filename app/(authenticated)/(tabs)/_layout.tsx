import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  const insets = useSafeAreaInsets();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }

  // 🔥 NEW THEME (matches Home & Discover)
  const inactiveColor = "#9CA3AF"; // gray
  const activeColor = "#000000"; // black

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Colors
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,

        // Style
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // white
          borderTopWidth: 0, // remove line
          elevation: 0, // remove Android shadow
          height: 65 + insets.bottom,
          paddingBottom: insets.bottom + 8,
          paddingTop: 8,
        },

        // Label styling
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
