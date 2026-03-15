import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../../components/discover/SearchBar";

export default function DiscoverScreen() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    // For demo purposes, generate fake search results
    const results = query
      ? [`${query} Wishlist 1`, `${query} Wishlist 2`, `${query} Wishlist 3`]
      : [];
    setSearchResults(results);
  };

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text className="text-3xl font-extrabold text-purple-800 mt-6 mb-2 text-center">
          Discover
        </Text>
        <Text className="text-sm text-purple-500 mb-4 text-center">
          Explore public wishlists from the community
        </Text>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Sample Content */}
        {searchResults.length > 0 ? (
          <View className="space-y-4">
            {searchResults.map((item, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-2xl shadow flex-row justify-between items-center"
              >
                <Text className="text-purple-900 font-semibold text-lg">
                  {item}
                </Text>
                <Text className="text-purple-600 font-bold text-xl">+</Text>
              </View>
            ))}
          </View>
        ) : (
          <View className="mt-8 space-y-6">
            <View className="bg-white p-6 rounded-2xl shadow">
              <Text className="text-purple-900 font-semibold text-lg mb-2">
                Travel Dreams
              </Text>
              <Text className="text-gray-400">
                Explore community wishlists for amazing travel experiences
              </Text>
            </View>

            <View className="bg-white p-6 rounded-2xl shadow">
              <Text className="text-purple-900 font-semibold text-lg mb-2">
                Tech Wishlist
              </Text>
              <Text className="text-gray-400">
                Discover popular gadgets and tech items people are wishing for
              </Text>
            </View>

            <View className="bg-white p-6 rounded-2xl shadow">
              <Text className="text-purple-900 font-semibold text-lg mb-2">
                Lifestyle Picks
              </Text>
              <Text className="text-gray-400">
                See trending lifestyle and home essentials from our users
              </Text>
            </View>
          </View>
        )}

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
