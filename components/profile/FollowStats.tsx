import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: (type: "followers" | "following") => void;
};

export default function FollowStats({ onPress }: Props) {
  return (
    <View className="flex-row justify-between">
      <Pressable
        onPress={() => onPress("followers")}
        className="flex-1 bg-gray-100 rounded-2xl p-4 mr-[5px] items-center"
      >
        <Text className="text-black text-lg font-bold">120</Text>
        <Text className="text-gray-500">Followers</Text>
      </Pressable>

      <Pressable
        onPress={() => onPress("following")}
        className="flex-1 bg-gray-100 rounded-2xl p-4 ml-[5px] items-center"
      >
        <Text className="text-black text-lg font-bold">80</Text>
        <Text className="text-gray-500">Following</Text>
      </Pressable>
    </View>
  );
}
