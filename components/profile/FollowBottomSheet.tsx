import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable, Text } from "react-native";

const { height } = Dimensions.get("window");

type Props = {
  visible: boolean;
  onClose: () => void;
  type: "followers" | "following";
};

export default function FollowBottomSheet({ visible, onClose, type }: Props) {
  const translateY = useRef(new Animated.Value(height)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  // Fake data
  const followers = ["Alice", "Bob", "Charlie"];
  const following = ["David", "Emma", "Frank"];

  const data = type === "followers" ? followers : following;

  // Handle user tap
  const handleUserPress = (username: string) => {
    onClose(); // close sheet first
    router.push("/(authenticated)/(tabs)/friends"); // navigate to friends page
  };

  return (
    <>
      {/* Overlay */}
      {visible && (
        <Pressable
          onPress={onClose}
          className="absolute w-full h-full bg-black/30"
        />
      )}

      {/* Sheet */}
      <Animated.View
        style={{ transform: [{ translateY }] }}
        className="absolute bottom-0 w-full bg-white rounded-t-3xl p-5"
      >
        <Text className="text-xl font-bold text-black mb-4">
          {type === "followers" ? "Followers" : "Following"}
        </Text>

        {data.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleUserPress(item)}
            className="py-3 border-b border-gray-200"
          >
            <Text className="text-black">{item}</Text>
          </Pressable>
        ))}
      </Animated.View>
    </>
  );
}
