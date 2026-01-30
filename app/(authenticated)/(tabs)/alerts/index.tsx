import AppContainer from "@/components/common/AppContainer";
import PostCard from "@/components/home/PostCard";
import SectionHeader from "@/components/home/SectionHeader";
import { FlatList, ScrollView } from "react-native";

// Example alert data
const alertsData = [
  {
    id: "1",
    title: "Server Maintenance",
    description: "Scheduled maintenance at 10 PM.",
  },
  {
    id: "2",
    title: "New Feature",
    description: "Check out the new wishlist filters.",
  },
  {
    id: "3",
    title: "Account Notice",
    description: "Your password will expire in 5 days.",
  },
];

export default function AlertsPage() {
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        <SectionHeader title="Alerts" />
        <FlatList
          data={alertsData}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <PostCard title={item.title} description={item.description} />
          )}
        />
      </ScrollView>
    </AppContainer>
  );
}
