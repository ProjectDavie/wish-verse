import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface Product {
  id: string;
  image?: string;
  details: string;
}

interface RecentlyAddedProps {
  savedWishes: Product[];
}

export default function RecentlyAdded({ savedWishes }: RecentlyAddedProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const wishesToShow =
    savedWishes.length > 0
      ? savedWishes
      : [{ id: "0", details: "No recent wishes" }];

  const handleCardPress = (item: Product) => {
    if (item.id === "0") return;
    router.push({
      pathname: "/(authenticated)/(tabs)/home/[id]",
      params: { product: item },
    });
  };

  const handleCarouselScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <View className="px-6 py-4">
        <Text className="text-xl font-bold text-black">
          Recently Added ({savedWishes.length})
        </Text>
      </View>

      <FlatList
        data={wishesToShow}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleCarouselScroll}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleCardPress(item)}
            style={{ width, paddingHorizontal: 24 }}
          >
            <View className="h-96 rounded-3xl bg-gray-100 overflow-hidden justify-center items-center">
              {item.image ? (
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full rounded-3xl"
                  resizeMode="cover"
                />
              ) : (
                <Text className="text-black text-lg font-semibold">
                  {item.details}
                </Text>
              )}
            </View>

            {item.image && (
              <Text className="mt-2 text-black text-base font-medium">
                {item.details}
              </Text>
            )}
          </TouchableOpacity>
        )}
      />

      {savedWishes.length > 0 && (
        <View className="flex-row justify-center mt-3 mb-6 space-x-2">
          {wishesToShow.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full ${
                activeIndex === index ? "w-6 bg-black" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
}
