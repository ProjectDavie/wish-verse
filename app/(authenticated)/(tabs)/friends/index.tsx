import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FriendCard from "../../../../components/friends/FriendCard";
import FriendStats from "../../../../components/friends/FriendStats";

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

  const removeFriend = (id: number) =>
    setFriends((prev) => prev.filter((f) => f.id !== id));

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const online = filteredFriends.filter((f) => f.status === "Online");
  const offline = filteredFriends.filter((f) => f.status !== "Online");

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView
        className="px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <Text className="text-3xl font-extrabold text-purple-800 mt-6 mb-2 text-center">
          Friends
        </Text>
        <Text className="text-sm text-purple-500 mb-6 text-center">
          Connect with your friends and see their status
        </Text>

        {/* Search */}
        <View className="bg-white rounded-xl px-4 py-3 mb-6">
          <TextInput
            placeholder="Search friends..."
            placeholderTextColor="#9CA3AF"
            className="text-gray-700"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Stats */}
        <FriendStats
          onlineCount={online.length}
          offlineCount={offline.length}
        />

        {/* Online Friends */}
        <Text className="text-purple-900 font-bold text-lg mb-3">Online</Text>
        {online.map((friend) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            status={friend.status}
            onRemove={() => removeFriend(friend.id)}
          />
        ))}

        {/* Offline / Busy Friends */}
        <Text className="text-purple-900 font-bold text-lg mt-6 mb-3">
          Offline / Busy
        </Text>
        {offline.map((friend) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            status={friend.status}
            onRemove={() => removeFriend(friend.id)}
          />
        ))}

        <View className="h-16" />
      </ScrollView>
    </SafeAreaView>
  );
}
