import { useAuth } from "@/context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { logout } = useAuth();

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
        }}
      >
        {/* Header Section */}
        <View className="items-center mb-10">
          <View className="h-32 w-32 rounded-full bg-purple-300 items-center justify-center mb-4">
            <Text className="text-4xl font-bold text-purple-900">
              DV
            </Text>
          </View>

          <Text className="text-white text-3xl font-extrabold">
            Project Davie
          </Text>

          <Text className="text-purple-200 mt-2 text-base">
            Building WishVerse ✨
          </Text>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-around px-6 mb-10">
          <View className="items-center">
            <Text className="text-white text-xl font-bold">12</Text>
            <Text className="text-purple-200 text-sm">Posts</Text>
          </View>

          <View className="items-center">
            <Text className="text-white text-xl font-bold">1.2K</Text>
            <Text className="text-purple-200 text-sm">Followers</Text>
          </View>

          <View className="items-center">
            <Text className="text-white text-xl font-bold">180</Text>
            <Text className="text-purple-200 text-sm">Following</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="px-6 flex-row gap-4 mb-6">
          <TouchableOpacity className="flex-1 bg-white/20 py-4 rounded-2xl items-center">
            <Text className="text-white font-semibold">
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 bg-purple-900/40 py-4 rounded-2xl items-center">
            <Text className="text-white font-semibold">
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View className="px-6 mb-10">
          <TouchableOpacity
            onPress={logout}
            className="bg-red-500/80 py-4 rounded-2xl items-center"
          >
            <Text className="text-white font-semibold">
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Sections */}
        <View className="px-6 space-y-4">
          <View className="bg-white/10 rounded-2xl p-5">
            <Text className="text-purple-200 text-sm mb-1">
              Email
            </Text>
            <Text className="text-white font-medium">
              davie@wishverse.app
            </Text>
          </View>

          <View className="bg-white/10 rounded-2xl p-5">
            <Text className="text-purple-200 text-sm mb-1">
              Account Type
            </Text>
            <Text className="text-white font-medium">
              Creator
            </Text>
          </View>

          <View className="bg-white/10 rounded-2xl p-5">
            <Text className="text-purple-200 text-sm mb-1">
              Joined
            </Text>
            <Text className="text-white font-medium">
              January 2025
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
