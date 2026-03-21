import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  const insets = useSafeAreaInsets();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }

  // Theme colors
  const inactiveColor = "#9D7EDB"; // lighter purple
  const activeColor = "#5B21B6"; // darker purple

  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: activeColor,
      tabBarInactiveTintColor: inactiveColor,
      tabBarStyle: {
        backgroundColor: "#FFFDD0", // cream
        borderTopColor: "transparent", // remove top border
        height: 65 + insets.bottom, // raise tab bar above home button
        paddingBottom: insets.bottom + 8, // add safe area padding
        paddingTop: 8,
        position: "absolute", // optional: makes it float above home indicator
      },
      }}
    >
      <Tabs.Screen
      name="home"
      options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
      name="discover"
      options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="calendar-number" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
      name="friends"
      options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="people" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
      name="alerts"
      options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="notifications" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" color={color} size={size} />
        ),
      }}
      />
    </Tabs>
  );
}
