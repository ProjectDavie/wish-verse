import React, { useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

import AddLinkModal from "@/components/home/AddLinkModal";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import TopHeader from "@/components/home/TopHeader";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [savedWishes, setSavedWishes] = useState<
    { id: string; image?: string; details: string }[]
  >([]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (product: {
    id: string;
    image?: string;
    details: string;
  }) => {
    setSavedWishes((prev) => [product, ...prev]);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <TopHeader scrollY={scrollY} />

      {/* Scrollable Content */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 120, // space for floating button
        }}
      >
        {/* Recently Added */}
        <RecentlyAdded savedWishes={savedWishes} />
      </Animated.ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        className="absolute bottom-8 right-6 bg-black w-16 h-16 rounded-full justify-center items-center shadow-lg"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white text-3xl font-bold">+</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddLinkModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAdd}
      />
    </View>
  );
}
