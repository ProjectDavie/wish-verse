import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const availableWishes = [
  { id: 1, title: "Travel to Japan" },
  { id: 2, title: "Learn Rust" },
  { id: 3, title: "Build Wish-Verse App" },
  { id: 4, title: "Start a Podcast" },
  { id: 5, title: "Run a Marathon" },
  { id: 6, title: "Read 50 books" },
  { id: 7, title: "Learn AI/ML" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Available Wishes
        </Text>

        {/* Wish List */}
        {availableWishes.map((wish) => (
          <View
            key={wish.id}
            className="bg-white rounded-xl p-4 mb-4 shadow"
          >
            <Text className="text-purple-900 font-semibold text-lg">
              {wish.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
