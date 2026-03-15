import { useAuth } from "@/context/AuthContext";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { logout } = useAuth();

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
        {/* Header Section */}
        <View className="items-center mb-10">
          <View className="h-32 w-32 rounded-full bg-purple-300 items-center justify-center mb-4">
            <Text className="text-purple-900 text-4xl font-bold">DV</Text>
          </View>

          <Text className="text-purple-900 text-3xl font-extrabold">
            Project Davie
          </Text>

          <Text className="text-purple-500 mt-2 text-base">
            Building WishVerse ✨
          </Text>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-around mb-10">
          <View className="items-center bg-white rounded-xl p-4 flex-1 mx-2">
            <Text className="text-purple-900 text-xl font-bold">12</Text>
            <Text className="text-purple-500 text-sm">Posts</Text>
          </View>

          <View className="items-center bg-white rounded-xl p-4 flex-1 mx-2">
            <Text className="text-purple-900 text-xl font-bold">1.2K</Text>
            <Text className="text-purple-500 text-sm">Followers</Text>
          </View>

          <View className="items-center bg-white rounded-xl p-4 flex-1 mx-2">
            <Text className="text-purple-900 text-xl font-bold">180</Text>
            <Text className="text-purple-500 text-sm">Following</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-4 mb-6">
          <TouchableOpacity className="flex-1 bg-purple-200 py-4 rounded-2xl items-center">
            <Text className="text-purple-900 font-semibold">Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 bg-purple-300/50 py-4 rounded-2xl items-center">
            <Text className="text-purple-900 font-semibold">Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View className="mb-12">
          <TouchableOpacity
            onPress={logout}
            className="bg-red-500/80 py-4 rounded-2xl items-center"
          >
            <Text className="text-white font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Info Sections */}
        <View className="space-y-6">
          <View className="bg-white rounded-2xl p-5 shadow">
            <Text className="text-purple-500 text-sm mb-1">Email</Text>
            <Text className="text-purple-900 font-medium">
              davie@wishverse.app
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-5 shadow">
            <Text className="text-purple-500 text-sm mb-1">Account Type</Text>
            <Text className="text-purple-900 font-medium">Creator</Text>
          </View>

          <View className="bg-white rounded-2xl p-5 shadow">
            <Text className="text-purple-500 text-sm mb-1">Joined</Text>
            <Text className="text-purple-900 font-medium">January 2025</Text>
          </View>
        </View>

        <View className="h-16" />
      </ScrollView>
    </View>
  );
}
