import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

type Props = {
  visible: boolean;
  onClose: () => void;
  type: "followers" | "following";
};

export default function FollowBottomSheet({ visible, onClose, type }: Props) {
  const router = useRouter();

  // Shared value for Y position
  const translateY = useSharedValue(height);

  // Snap points
  const TOP = 50;
  const MIDDLE = height * 0.5;
  const BOTTOM = height;

  // Open / close effect
  useEffect(() => {
    translateY.value = visible ? withSpring(MIDDLE) : withSpring(BOTTOM);
  }, [visible]);

  // Gesture handler
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationY, velocityY } = event.nativeEvent;
    translateY.value = Math.max(
      TOP,
      Math.min(BOTTOM, translateY.value + translationY),
    );

    // Drag down enough or fling down → close
    if (translationY > 100 || velocityY > 1500) {
      translateY.value = withSpring(BOTTOM, {}, () => {
        runOnJS(onClose)();
      });
    }
  };

  // Animated style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  // Fake data
  const followers = ["Alice", "Bob", "Charlie", "Henry", "Irene"];
  const following = ["David", "Emma", "Frank", "Grace", "Helen"];
  const data = type === "followers" ? followers : following;

  // Handle user tap
  const handleUserPress = (username: string) => {
    translateY.value = withSpring(BOTTOM, {}, () => {
      runOnJS(onClose)();
      runOnJS(router.push)("/(authenticated)/(tabs)/friends");
    });
  };

  return (
    <>
      {/* Overlay */}
      {visible && (
        <Pressable
          onPress={() => {
            translateY.value = withSpring(BOTTOM, {}, () => {
              runOnJS(onClose)();
            });
          }}
          className="absolute w-full h-full bg-black/30"
        />
      )}

      {/* Bottom Sheet */}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: "100%",
              height: height,
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              padding: 20,
            },
            animatedStyle,
          ]}
        >
          {/* Drag handle */}
          <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-4" />

          {/* Header */}
          <Text className="text-xl font-bold text-black mb-6">
            {type === "followers" ? "Followers" : "Following"}
          </Text>

          {/* User list */}
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleUserPress(item)}
                className="bg-gray-100 p-4 rounded-2xl mb-3 shadow"
              >
                <Text className="text-black font-semibold">{item}</Text>
              </Pressable>
            )}
          />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}
