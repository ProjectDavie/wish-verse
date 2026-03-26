import React, { useRef, useState } from "react";
import { Animated, View } from "react-native";

import AddButton from "@/components/home/AddButton";
import AddLinkModal from "@/components/home/AddLinkModal";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import TopHeader from "@/components/home/TopHeader";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <RecentlyAdded />
      </Animated.ScrollView>

      {/* Floating Add Button */}
      <AddButton onPress={() => setModalVisible(true)} />

      {/* Modal */}
      <AddLinkModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
