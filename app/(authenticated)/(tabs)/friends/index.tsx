import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Initial data
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
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setFriends(INITIAL_FRIENDS);
      setRefreshing(false);
    }, 1000);
  };

  const removeFriend = (id: number) => {
    setFriends((prev) => prev.filter((f) => f.id !== id));
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const color =
      status === "Online"
        ? "bg-green-100 text-green-600"
        : status === "Busy"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-gray-100 text-gray-400";

    return (
      <Text className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
        {status}
      </Text>
    );
  };

  const FriendCard = ({ friend }: { friend: any }) => (
    <View className="bg-white/10 rounded-2xl p-4 mb-4">
      <View className="flex-row items-center justify-between">
        {/* Left */}
        <View className="flex-row items-center gap-4">
          <View className="h-12 w-12 rounded-full bg-purple-600 items-center justify-center">
            <Text className="text-white font-bold text-lg">
              {friend.name.charAt(0)}
            </Text>
          </View>

          <View>
            <Text className="text-white font-semibold text-lg">
              {friend.name}
            </Text>
            <StatusBadge status={friend.status} />
          </View>
        </View>

        {/* Actions */}
        <View className="flex-row gap-2">
          <Pressable className="px-3 py-2 rounded-lg bg-white/20">
            <Text className="text-white text-xs font-semibold">Chat</Text>
          </Pressable>

          <Pressable
            onPress={() => removeFriend(friend.id)}
            className="px-3 py-2 rounded-lg bg-red-500/80"
          >
            <Text className="text-white text-xs font-semibold">Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  const online = friends.filter((f) => f.status === "Online");
  const offline = friends.filter((f) => f.status !== "Online");

  return (
    <LinearGradient
      colors={["#5B21B6", "#6D28D9", "#7C3AED"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          className="px-6"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Header */}
          <Text className="text-3xl font-extrabold text-white mt-6 mb-4 text-center">
            Friends
          </Text>
          <Text className="text-purple-200 text-sm mb-6 text-center">
            Connect with your friends and see their status
          </Text>

          {/* Search */}
          <View className="bg-white/10 rounded-xl px-4 py-3 mb-6">
            <TextInput
              placeholder="Search friends..."
              placeholderTextColor="#d1d5db"
              className="text-white"
            />
          </View>

          {/* Stats */}
          <View className="flex-row justify-between mb-6">
            <View className="bg-white/10 rounded-xl p-4 flex-1 mr-2 items-center">
              <Text className="text-purple-200 text-sm">Online</Text>
              <Text className="text-white font-bold text-2xl">
                {online.length}
              </Text>
            </View>

            <View className="bg-white/10 rounded-xl p-4 flex-1 ml-2 items-center">
              <Text className="text-purple-200 text-sm">Offline</Text>
              <Text className="text-white font-bold text-2xl">
                {offline.length}
              </Text>
            </View>
          </View>

          {/* Online */}
          <Text className="text-white font-bold text-lg mb-3">Online</Text>
          {online.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}

          {/* Offline */}
          <Text className="text-white font-bold text-lg mt-6 mb-3">
            Offline / Busy
          </Text>
          {offline.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}

          <View className="h-16" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
