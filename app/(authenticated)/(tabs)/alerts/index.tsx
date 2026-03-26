import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const INITIAL_ALERTS = [
  { id: 1, title: "Emergency Call", description: "Fire reported in Downtown" },
  {
    id: 2,
    title: "New Message",
    description: "Responder assigned to your request",
  },
  { id: 3, title: "System Update", description: "App updated successfully" },
  {
    id: 4,
    title: "Maintenance",
    description: "Scheduled maintenance at 10 PM",
  },
];

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <PageHeader
        title="Alerts"
        subtitle="Stay updated with your notifications"
      />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}
      >
        <View className="space-y-4 mt-4">
          {alerts.map((alert) => (
            <View
              key={alert.id}
              className="bg-gray-100 rounded-2xl p-4 shadow-sm"
            >
              <Text className="text-lg font-semibold text-black">
                {alert.title}
              </Text>
              <Text className="text-gray-700 mt-1">{alert.description}</Text>
            </View>
          ))}

          {alerts.length === 0 && (
            <View className="mt-10 items-center">
              <Text className="text-gray-400">No alerts at the moment</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
