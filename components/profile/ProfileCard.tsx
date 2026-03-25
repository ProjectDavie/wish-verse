import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function ProfileCard() {
  return (
    <View className="flex-row justify-between items-center bg-gray-100 rounded-3xl p-5">
      {/* LEFT SIDE (INFO) */}
      <View className="flex-1 pr-4">
        <TextInput
          placeholder="Username"
          placeholderTextColor="#9CA3AF"
          className="text-black font-semibold mb-2"
        />

        <TextInput
          placeholder="Name"
          placeholderTextColor="#9CA3AF"
          className="text-black mb-2"
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          className="text-black mb-2"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          className="text-black"
        />
      </View>

      {/* RIGHT SIDE (PROFILE IMAGE) */}
      <View className="items-center">
        <View className="w-20 h-20 rounded-full bg-gray-300 mb-2" />

        <Pressable className="bg-black px-3 py-1 rounded-lg">
          <Text className="text-white text-xs">Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}
