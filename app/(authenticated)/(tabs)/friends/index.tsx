import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

const INITIAL_FRIENDS = [
  { id: 1, name: "Alice", status: "Online" },
  { id: 2, name: "Bob", status: "Offline" },
  { id: 3, name: "Charlie", status: "Online" },
  { id: 4, name: "David", status: "Busy" },
  { id: 5, name: "Eve", status: "Offline" },
  { id: 6, name: "Frank", status: "Online" },
];

export default function FriendsScreen() {
  const [friends, setFriends] = useState(INITIAL_FRIENDS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <PageHeader title="Friends" subtitle="Connect with your friends" />

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}
      >
        {/* Search */}
        <View className="bg-gray-100 rounded-xl px-4 py-3 mb-6">
          <TextInput
            placeholder="Search friends..."
            placeholderTextColor="#9CA3AF"
            className="text-black"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Friend Cards */}
        <View className="space-y-4">
          {filteredFriends.map((friend) => (
            <View
              key={friend.id}
              className="bg-gray-100 rounded-2xl p-4 flex-row justify-between items-center"
            >
              <Text className="text-black font-semibold">{friend.name}</Text>
              <Text className="text-gray-500">{friend.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
