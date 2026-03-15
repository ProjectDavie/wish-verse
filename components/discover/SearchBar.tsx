import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-row items-center bg-white rounded-xl shadow px-4 py-2 mb-6">
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search wishlists..."
        className="flex-1 text-gray-700 text-base"
        placeholderTextColor="#A3AED0"
      />
      <TouchableOpacity
        onPress={() => onSearch(query)}
        className="bg-purple-600 px-4 py-2 rounded-lg ml-2"
      >
        <Text className="text-white font-semibold">Search</Text>
      </TouchableOpacity>
    </View>
  );
}
