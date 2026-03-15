import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AlertCard from "../../../../components/alerts/AlertCard";

export default function AlertsScreen() {
  const insets = useSafeAreaInsets();

  // Dummy alerts data
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
    <View className="flex-1 bg-purple-50">
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
          <Text className="text-purple-900 text-3xl font-extrabold">
            Alerts
          </Text>
          <Text className="text-purple-500 text-sm mt-1">
            Stay updated with the latest notifications
          </Text>
        </View>

        {/* Alerts List */}
        <View className="space-y-4">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              title={alert.title}
              description={alert.description}
              time={alert.time}
            />
          ))}
        </View>

        {/* No Alerts Placeholder */}
        {alerts.length === 0 && (
          <View className="mt-16 items-center">
            <Text className="text-purple-500 text-lg">
              No alerts at the moment
            </Text>
          </View>
        )}

        <View className="h-16" />
      </ScrollView>
    </View>
  );
}
