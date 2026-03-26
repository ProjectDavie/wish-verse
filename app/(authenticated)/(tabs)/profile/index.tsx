import PageHeader from "@/components/PageHeader"; // header without bubble
import { MaterialIcons } from "@expo/vector-icons"; // exit icon
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import FollowBottomSheet from "../../../../components/profile/FollowBottomSheet";
import FollowStats from "../../../../components/profile/FollowStats";
import ProfileCard from "../../../../components/profile/ProfileCard";
import { useAuth } from "../../../../context/AuthContext";

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"followers" | "following">("followers");

  const { logout } = useAuth();

  const handleOpen = (selected: "followers" | "following") => {
    setType(selected);
    setVisible(true);
  };

  const handleLogout = () => {
    logout();
    // navigate to login page if needed
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <PageHeader title="Profile" subtitle="View and manage your profile" />

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}
      >
        <View>
          <ProfileCard />
          <FollowStats onPress={handleOpen} />
        </View>
      </ScrollView>

      {/* Logout Button fixed at bottom */}
      <View className="absolute bottom-6 left-0 right-0 px-6">
        <Pressable
          onPress={handleLogout}
          className="bg-red-600 flex-row items-center justify-center py-4 rounded-2xl"
        >
          <MaterialIcons name="exit-to-app" size={24} color="white" />
          <Text className="text-white font-bold text-lg ml-3">Logout</Text>
        </Pressable>
      </View>

      {/* Bottom Sheet */}
      <FollowBottomSheet
        visible={visible}
        type={type}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}
