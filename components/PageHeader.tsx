import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingHorizontal: 20,
        paddingBottom: 16,
        backgroundColor: "white",
      }}
    >
      {/* Header Text */}
      <Text className="text-4xl font-extrabold text-black">{title}</Text>
      {subtitle && <Text className="text-2xl text-black mt-2">{subtitle}</Text>}
    </View>
  );
}
