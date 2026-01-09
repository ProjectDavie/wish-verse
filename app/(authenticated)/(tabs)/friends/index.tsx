import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample friends data
const friendsList = [
  { id: 1, name: "Alice", status: "Online" },
  { id: 2, name: "Bob", status: "Offline" },
  { id: 3, name: "Charlie", status: "Online" },
  { id: 4, name: "David", status: "Busy" },
  { id: 5, name: "Eve", status: "Offline" },
  { id: 6, name: "Frank", status: "Online" },
];

export default function FriendsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Friends
        </Text>

        {friendsList.map((friend) => (
          <View
            key={friend.id}
            className="bg-white rounded-xl p-4 mb-4 shadow flex-row justify-between items-center"
          >
            <Text className="text-purple-900 font-semibold text-lg">
              {friend.name}
            </Text>
            <Text className={`text-sm font-medium ${
              friend.status === "Online"
                ? "text-green-500"
                : friend.status === "Offline"
                ? "text-gray-400"
                : "text-yellow-500"
            }`}>
              {friend.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
