import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "../../../../components/discover/SearchBar";

export default function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    const data = query
      ? Array.from({ length: 8 }, (_, i) => `${query} ${i + 1}`)
      : [];
    setResults(data);
  };

  return (
    <View className="flex-1 bg-white">
      {/* ---------------- HEADER ---------------- */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
        }}
      >
        <Text className="text-4xl font-extrabold text-black">Discover</Text>
        <Text className="text-2xl text-black mt-2">Find new wishes ✨</Text>
      </View>

      {/* ---------------- CONTENT ---------------- */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Search */}
        <View className="px-5 mb-6">
          <SearchBar onSearch={handleSearch} />
        </View>

        {/* Grid Results */}
        <View className="px-5 flex-row flex-wrap justify-between">
          {results.map((item, index) => (
            <View
              key={index}
              className="w-[48%] h-[150px] bg-gray-100 rounded-2xl mb-4 justify-end p-4"
            >
              <Text className="text-black font-semibold">{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
