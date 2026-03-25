import React from "react";
import { Text, View } from "react-native";

export default function FollowStats() {
  return (
    <View className="flex-row justify-between">
      <View className="flex-1 bg-gray-100 rounded-2xl p-4 mr-[5px] items-center">
        <Text className="text-black text-lg font-bold">120</Text>
        <Text className="text-gray-500">Followers</Text>
      </View>

      <View className="flex-1 bg-gray-100 rounded-2xl p-4 ml-[5px] items-center">
        <Text className="text-black text-lg font-bold">80</Text>
        <Text className="text-gray-500">Following</Text>
      </View>
    </View>
  );
}
