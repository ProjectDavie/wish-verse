import React from "react";
import { ScrollView, View } from "react-native";
import FollowStats from "../../../../components/profile/FollowStats";
import ProfileCard from "../../../../components/profile/ProfileCard";
import ProfileHeader from "../../../../components/profile/ProfileHeader";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <ProfileHeader />

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="px-5">
          {/* Profile Info */}
          <ProfileCard />

          {/* Gap */}
          <View className="h-[5px]" />

          {/* Followers / Following */}
          <FollowStats />
        </View>
      </ScrollView>
    </View>
  );
}
