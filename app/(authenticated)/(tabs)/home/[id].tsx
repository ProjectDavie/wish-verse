import { useRouter } from "expo-router";
import { View } from "nativewind";
import React from "react";
import { Dimensions, Image, ScrollView, Text } from "react-native";

const { width } = Dimensions.get("window");

interface Product {
  id: string;
  image?: string;
  details: string;
}

export default function ProductPage() {
  const router = useRouter();

  // @ts-ignore
  const product: Product = router.params?.product || {
    id: "0",
    image: "https://via.placeholder.com/400",
    details: "Sample Instagram product details",
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, alignItems: "center" }}>
      {product.image && (
        <Image
          source={{ uri: product.image }}
          style={{
            width: width - 32,
            height: 400,
            borderRadius: 16,
            marginBottom: 16,
          }}
        />
      )}

      <View className="px-2">
        <Text className="text-black text-lg font-semibold">
          {product.details}
        </Text>
      </View>
    </ScrollView>
  );
}
