import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample discover data
const DISCOVER_ITEMS = [
  {
    id: 1,
    title: "Travel Dreams",
    category: "Travel",
    wishes: ["Paris Trip", "Bali Retreat", "Tokyo Visit"],
  },
  {
    id: 2,
    title: "Tech Wishlist",
    category: "Technology",
    wishes: ["MacBook Pro", "Mechanical Keyboard", "Smart Watch"],
  },
  {
    id: 3,
    title: "Fitness Goals",
    category: "Health",
    wishes: ["Gym Membership", "Yoga Mat", "Running Shoes"],
  },
  {
    id: 4,
    title: "Home Essentials",
    category: "Lifestyle",
    wishes: ["Standing Desk", "Coffee Machine", "Air Purifier"],
  },
];

const CATEGORIES = ["All", "Travel", "Technology", "Health", "Lifestyle"];

export default function DiscoverScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? DISCOVER_ITEMS
      : DISCOVER_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text className="text-3xl font-extrabold text-purple-800 mt-6 mb-4 text-center">
          Discover
        </Text>

        <Text className="text-sm text-purple-500 mb-6 text-center">
          Explore public wishlists from the community
        </Text>

        {/* Category Dropdown */}
        <View className="bg-white rounded-xl shadow mb-6">
          <Text className="px-4 pt-4 text-sm font-semibold text-gray-400">
            Category
          </Text>

          {CATEGORIES.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`px-4 py-3 border-t border-gray-100 ${
                selectedCategory === category ? "bg-purple-100" : ""
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedCategory === category
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Discover List */}
        {filteredItems.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <View
              key={item.id}
              className="bg-white rounded-2xl p-4 mb-4 shadow"
            >
              {/* Header */}
              <Pressable
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                className="flex-row justify-between items-center"
              >
                <View>
                  <Text className="text-lg font-semibold text-purple-900">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-400 mt-1">
                    {item.category}
                  </Text>
                </View>

                <Text className="text-purple-600 font-bold text-xl">
                  {isExpanded ? "−" : "+"}
                </Text>
              </Pressable>

              {/* Expanded Wishes */}
              {isExpanded && (
                <View className="mt-4 border-t border-gray-100 pt-4">
                  {item.wishes.map((wish, index) => (
                    <Pressable key={index} className="py-2">
                      <Text className="text-purple-700 font-medium">
                        • {wish}
                      </Text>
                    </Pressable>
                  ))}

                  <Pressable className="mt-4 bg-purple-600 rounded-xl py-3">
                    <Text className="text-white font-semibold text-center">
                      Save Wishlist
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          );
        })}

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
