import PageHeader from "@/components/PageHeader"; // <-- updated import
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import FollowBottomSheet from "../../../../components/profile/FollowBottomSheet";
import FollowStats from "../../../../components/profile/FollowStats";
import ProfileCard from "../../../../components/profile/ProfileCard";

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"followers" | "following">("followers");

  const handleOpen = (selected: "followers" | "following") => {
    setType(selected);
    setVisible(true);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <PageHeader title="Profile" subtitle="View and manage your profile" />

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}
      >
        <View className="space-y-4">
          {/* Profile Info */}
          <ProfileCard />

          {/* Stats */}
          <FollowStats onPress={handleOpen} />
        </View>
      </ScrollView>

      {/* Bottom Sheet */}
      <FollowBottomSheet
        visible={visible}
        type={type}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}
