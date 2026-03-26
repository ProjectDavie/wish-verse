import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "../../../../components/discover/SearchBar";

export default function DiscoverScreen() {
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
      <PageHeader title="Discover" subtitle="Find new wishes ✨" />

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
