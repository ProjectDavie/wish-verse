import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Profile bubble animation
  const bubbleOpacity = scrollY.interpolate({
    inputRange: [50, 120],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const bubbleScale = scrollY.interpolate({
    inputRange: [50, 120],
    outputRange: [0.6, 1],
    extrapolate: "clamp",
  });

  // Carousel data
  const carouselData = [
    { id: "1", title: "Trip to Japan 🇯🇵" },
    { id: "2", title: "MacBook Pro 💻" },
    { id: "3", title: "Dream Car 🚗" },
    { id: "4", title: "Luxury Watch ⌚" },
    { id: "5", title: "Private Island 🏝️" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleCarouselScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View className="flex-1 bg-white">
      {/* ---------------- Header Layer ---------------- */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          zIndex: 50,
        }}
        className="bg-white"
      >
        <Text className="text-4xl font-extrabold text-black">Hello User,</Text>
        <Text className="text-2xl text-black mt-2">Make a wish ✨</Text>

        {/* Profile Bubble */}
        <Animated.View
          style={{
            position: "absolute",
            top: insets.top + 16,
            right: 20,
            opacity: bubbleOpacity,
            transform: [{ scale: bubbleScale }],
          }}
        >
          <Pressable
            onPress={() => router.push("/(authenticated)/(tabs)/profile")}
            className="w-12 h-12 rounded-full bg-black justify-center items-center"
          >
            <Text className="text-white font-bold">U</Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* ---------------- Scrollable Content ---------------- */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
      >
        {/* ---------------- Recently Added Section ---------------- */}
        <View className="bg-white">
          <View className="bg-white px-6 py-4">
            <Text className="text-xl font-bold text-black">Recently Added</Text>
          </View>

          {/* Carousel */}
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

        {/* ---------------- Next Section (Sticky) ---------------- */}
        <View className="bg-white px-6 py-4" style={{ zIndex: 10 }}>
          <Text className="text-xl font-bold text-black">Trending</Text>
        </View>

        <View className="h-[600px] bg-gray-100 mx-6 rounded-2xl mb-10" />
      </Animated.ScrollView>
    </View>
  );
}
