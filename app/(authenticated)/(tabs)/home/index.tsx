import { useRef, useState } from "react";
import { Animated, Dimensions, FlatList, Text, View } from "react-native";

import TopHeader from "@/components/home/TopHeader";
import React from "react";

const { width } = Dimensions.get("window");

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    { id: "1", title: "Trip to Japan 🇯🇵" },
    { id: "2", title: "MacBook Pro 💻" },
    { id: "3", title: "Dream Car 🚗" },
    { id: "4", title: "Luxury Watch ⌚" },
    { id: "5", title: "Private Island 🏝️" },
  ];

  const handleCarouselScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Top Header */}
      <TopHeader scrollY={scrollY} />

      {/* Scrollable Content */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
      >
        {/* Recently Added */}
        <View className="bg-white">
          <View className="bg-white px-6 py-4">
            <Text className="text-xl font-bold text-black">Recently Added</Text>
          </View>

          <FlatList
            data={carouselData}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            onMomentumScrollEnd={handleCarouselScroll}
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

          {/* Carousel Dots */}
          <View className="flex-row justify-center mt-3 mb-6 space-x-2">
            {carouselData.map((_, index) => (
              <View
                key={index}
                className={`h-2 rounded-full ${
                  activeIndex === index ? "w-6 bg-black" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
