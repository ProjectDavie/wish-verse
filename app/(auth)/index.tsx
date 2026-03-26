import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function ReanimatedTestScreen() {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <View className="flex-1 justify-center items-center bg-white gap-4">
      {/* Animated Box */}
      <Animated.View
        style={animatedStyle}
        className="w-24 h-24 bg-blue-500 rounded-2xl"
      />

      {/* Buttons */}
      <Pressable
        onPress={() => {
          translateX.value = withSpring(width * 0.5 - 50);
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Slide</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          scale.value = withSpring(1.5);
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Scale</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          rotate.value = withTiming(360, { duration: 1000 });
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Rotate</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          opacity.value = withTiming(0.2, { duration: 500 });
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Fade</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          translateX.value = withSequence(
            withTiming(100),
            withTiming(-100),
            withTiming(0),
          );
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Sequence</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          scale.value = withRepeat(withTiming(1.5), 4, true);
        }}
        className="bg-black px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Repeat</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          // reset everything
          translateX.value = withSpring(0);
          scale.value = withSpring(1);
          rotate.value = withTiming(0);
          opacity.value = withTiming(1);
        }}
        className="bg-red-500 px-4 py-2 rounded-lg mt-4"
      >
        <Text className="text-white">Reset</Text>
      </Pressable>
    </View>
  );
}
