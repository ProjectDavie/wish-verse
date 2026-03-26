import { useRouter } from "expo-router";
import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  scrollY: Animated.Value; // Pass scrollY to animate the profile bubble
};

export default function TopHeader({ scrollY }: Props) {
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

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingHorizontal: 20,
        paddingBottom: 16,
        zIndex: 50,
        backgroundColor: "white",
      }}
    >
      {/* Big Header */}
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
  );
}
