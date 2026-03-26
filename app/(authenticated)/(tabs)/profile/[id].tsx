import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Profile ID: {id}</Text>
    </View>
  );
}
