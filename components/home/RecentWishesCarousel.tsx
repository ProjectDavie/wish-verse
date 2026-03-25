import { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function RecentWishesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: "1", title: "Trip to Japan 🇯🇵" },
    { id: "2", title: "MacBook Pro 💻" },
    { id: "3", title: "Dream Car 🚗" },
    { id: "4", title: "Luxury Watch ⌚" },
    { id: "5", title: "Private Island 🏝️" },
  ];

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleScroll}
        renderItem={({ item }) => (
          <View style={{ width }} className="px-6">
            <View className="h-[400px] rounded-3xl bg-gray-100 justify-end p-6">
              <Text className="text-xl font-semibold text-black">
                {item.title}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Dots */}
      <View className="flex-row justify-center mt-3 mb-6 space-x-2">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${
              activeIndex === index ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
