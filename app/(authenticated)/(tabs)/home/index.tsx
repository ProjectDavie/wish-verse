import { Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  // Extended dummy data for more scrollable content
  const communityWishes = [
    {
      id: "1",
      title: "Paris Trip",
      description: "Dreaming of Eiffel Tower 🌟",
    },
    {
      id: "2",
      title: "New Laptop",
      description: "Time to upgrade my setup 💻",
    },
    { id: "3", title: "Yoga Retreat", description: "Peaceful week in Bali 🧘‍♂️" },
    { id: "4", title: "Photography Gear", description: "Capture memories 📸" },
    {
      id: "5",
      title: "Cooking Classes",
      description: "Master some recipes 🍳",
    },
    {
      id: "6",
      title: "Mountain Hike",
      description: "Adventure in the Alps 🏔️",
    },
  ];

  const myWishlist = [
    { id: "1", title: "Standing Desk", status: "Pending" },
    { id: "2", title: "Air Purifier", status: "Purchased" },
    { id: "3", title: "Smart Watch", status: "Pending" },
    { id: "4", title: "Noise Cancelling Headphones", status: "Pending" },
    { id: "5", title: "Ergonomic Chair", status: "Purchased" },
    { id: "6", title: "LED Desk Lamp", status: "Pending" },
  ];

  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
      >
        {/* Header */}
        <Text className="text-3xl font-extrabold text-purple-800 mt-6 mb-2 text-center">
          Welcome Back!
        </Text>
        <Text className="text-purple-500 text-sm mb-6 text-center">
          Explore your wishlist and community wishes
        </Text>

        {/* Community Wishes Section */}
        <Text className="text-purple-900 text-xl font-bold mb-4">
          Community Wishes
        </Text>
        <View className="space-y-4 mb-8">
          {communityWishes.map((wish) => (
            <View key={wish.id} className="bg-white rounded-2xl p-4 shadow">
              <Text className="text-purple-900 font-semibold text-lg mb-1">
                {wish.title}
              </Text>
              <Text className="text-purple-500 text-sm">
                {wish.description}
              </Text>
              <Pressable className="mt-3 bg-purple-100 py-2 rounded-xl items-center">
                <Text className="text-purple-800 font-semibold text-sm">
                  View Details
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* My Wishlist Section */}
        <Text className="text-purple-900 text-xl font-bold mb-4">
          My Wishlist
        </Text>
        <View className="space-y-4 mb-8">
          {myWishlist.map((item) => (
            <View key={item.id} className="bg-white rounded-2xl p-4 shadow">
              <Text className="text-purple-900 font-semibold text-lg mb-1">
                {item.title}
              </Text>
              <Text className="text-purple-500 text-sm mb-2">
                Status: {item.status}
              </Text>
              <Pressable className="mt-3 bg-purple-100 py-2 rounded-xl items-center">
                <Text className="text-purple-800 font-semibold text-sm">
                  Update
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* Extra Content: More Community Wishes */}
        <Text className="text-purple-900 text-xl font-bold mb-4">
          Trending Wishes
        </Text>
        <View className="space-y-4 mb-8">
          {communityWishes.map((wish) => (
            <View
              key={`trending-${wish.id}`}
              className="bg-white rounded-2xl p-4 shadow"
            >
              <Text className="text-purple-900 font-semibold text-lg mb-1">
                {wish.title}
              </Text>
              <Text className="text-purple-500 text-sm">
                {wish.description}
              </Text>
              <Pressable className="mt-3 bg-purple-100 py-2 rounded-xl items-center">
                <Text className="text-purple-800 font-semibold text-sm">
                  View Details
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* Extra Content: More My Wishlist */}
        <Text className="text-purple-900 text-xl font-bold mb-4">
          Wishlist Updates
        </Text>
        <View className="space-y-4 mb-8">
          {myWishlist.map((item) => (
            <View
              key={`update-${item.id}`}
              className="bg-white rounded-2xl p-4 shadow"
            >
              <Text className="text-purple-900 font-semibold text-lg mb-1">
                {item.title}
              </Text>
              <Text className="text-purple-500 text-sm mb-2">
                Status: {item.status}
              </Text>
              <Pressable className="mt-3 bg-purple-100 py-2 rounded-xl items-center">
                <Text className="text-purple-800 font-semibold text-sm">
                  Update
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* Extra scroll padding */}
        <View className="h-16" />
      </ScrollView>
    </View>
  );
}
