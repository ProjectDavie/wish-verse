import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-row items-center bg-gray-100 rounded-2xl px-3 py-2">
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search wishlists..."
        placeholderTextColor="#9CA3AF"
        className="flex-1 text-black text-base px-2"
      />

      <Pressable
        onPress={() => onSearch(query)}
        className="bg-black px-4 py-2 rounded-xl"
      >
        <Text className="text-white font-semibold">Search</Text>
      </Pressable>
    </View>
  );
}
