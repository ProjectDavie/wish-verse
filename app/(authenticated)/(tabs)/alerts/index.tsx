import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AlertsScreen() {
  const insets = useSafeAreaInsets();

  // Dummy alerts data (replace with API/data later)
  const alerts = [
    {
      id: 1,
      title: "New Feature Release",
      description: "WishVerse v2.5 is now live with exciting updates!",
      time: "2h ago",
    },
    {
      id: 2,
      title: "System Maintenance",
      description:
        "Scheduled maintenance on February 5th from 12:00 - 14:00 UTC.",
      time: "1d ago",
    },
    {
      id: 3,
      title: "Follower Milestone",
      description:
        "You reached 1,200 followers! Keep sharing your creations ✨",
      time: "3d ago",
    },
  ];

  return (
    <LinearGradient
      colors={["#5B21B6", "#6D28D9", "#7C3AED"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 32,
          paddingBottom: insets.bottom + 40,
          paddingHorizontal: 16,
        }}
      >
        {/* Header */}
        <View className="mb-8">
          <Text className="text-white text-3xl font-extrabold">Alerts</Text>
          <Text className="text-purple-200 text-sm mt-1">
            Stay updated with the latest notifications
          </Text>
        </View>

        {/* Alerts List */}
        <View className="space-y-4">
          {alerts.map((alert) => (
            <TouchableOpacity
              key={alert.id}
              className="bg-white/10 rounded-2xl p-5"
            >
              <Text className="text-white text-lg font-semibold mb-1">
                {alert.title}
              </Text>
              <Text className="text-purple-200 text-sm mb-2">
                {alert.description}
              </Text>
              <Text className="text-purple-300 text-xs">{alert.time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* No Alerts Placeholder (Optional) */}
        {alerts.length === 0 && (
          <View className="mt-16 items-center">
            <Text className="text-purple-200 text-lg">
              No alerts at the moment
            </Text>
          </View>
        )}

        {/* Extra bottom padding */}
        <View className="h-16" />
      </ScrollView>
    </LinearGradient>
  );
}
