import React, { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";

const { width } = Dimensions.get("window");

interface CarouselItem {
  id: string;
  title: string;
}

// Example: this can come from props, state, or API
const savedWishes: CarouselItem[] = [
  // Uncomment to test with wishes
  // { id: "1", title: "Trip to Japan 🇯🇵" },
  // { id: "2", title: "MacBook Pro 💻" },
];

export default function RecentlyAdded() {
  const [activeIndex, setActiveIndex] = useState(0);

  const wishesToShow =
    savedWishes.length > 0
      ? savedWishes
      : [{ id: "0", title: "No recent wishes" }];

  const handleCarouselScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View>
      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Recently Added ({savedWishes.length})
        </Text>
      </View>

      {/* Carousel */}
      <FlatList
        data={wishesToShow}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleCarouselScroll}
        renderItem={({ item }) => (
          <View style={{ width, paddingHorizontal: 24 }}>
            <View
              style={{
                height: 400,
                borderRadius: 24,
                backgroundColor: "#E5E7EB",
                justifyContent: "center", // center text if no wishes
                alignItems: "center",
                padding: 24,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Carousel Dots */}
      {savedWishes.length > 0 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 12,
            marginBottom: 24,
            gap: 8,
          }}
        >
          {wishesToShow.map((_, index) => (
            <View
              key={index}
              style={{
                height: 8,
                borderRadius: 4,
                width: activeIndex === index ? 24 : 8,
                backgroundColor: activeIndex === index ? "black" : "#D1D5DB",
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}
