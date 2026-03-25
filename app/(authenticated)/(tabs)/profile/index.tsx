import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import FollowBottomSheet from "../../../../components/profile/FollowBottomSheet";
import FollowStats from "../../../../components/profile/FollowStats";
import ProfileCard from "../../../../components/profile/ProfileCard";
import ProfileHeader from "../../../../components/profile/ProfileHeader";

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"followers" | "following">("followers");

  const handleOpen = (selected: "followers" | "following") => {
    setType(selected);
    setVisible(true);
  };

  return (
    <View className="flex-1 bg-white">
      <ProfileHeader />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="px-5">
          <ProfileCard />

          <View className="h-[5px]" />

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
