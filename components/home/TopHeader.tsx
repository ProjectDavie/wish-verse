import { useRouter } from "expo-router";
import { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TopHeader() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Header fade animation
  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // Bubble animation
  const bubbleOpacity = scrollY.interpolate({
    inputRange: [80, 160],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const bubbleScale = scrollY.interpolate({
    inputRange: [80, 160],
    outputRange: [0.6, 1],
    extrapolate: "clamp",
  });

  return (
    <View className="bg-white">
      {/* Big Header */}
      <Animated.View
        style={{ opacity: titleOpacity }}
        className="px-6 pt-24 pb-12 bg-white"
      >
        <Text className="text-4xl font-extrabold text-black">Hello User,</Text>
        <Text className="text-2xl text-black mt-2">Make a wish ✨</Text>
      </Animated.View>

      {/* Profile Bubble */}
      <Animated.View
        style={{
          position: "absolute",
          top: insets.top + 10,
          right: 20,
          opacity: bubbleOpacity,
          transform: [{ scale: bubbleScale }],
          zIndex: 50,
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
