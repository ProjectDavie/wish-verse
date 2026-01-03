import AppContainer from "@/components/common/AppContainer";
import PostCard from "@/components/home/PostCard";
import SectionHeader from "@/components/home/SectionHeader";
import WishlistCard from "@/components/home/WishlistCard";
import { communityWishes, myWishlist } from "@/components/data/mockData";
import { FlatList, ScrollView } from "react-native";

export default function Home() {
  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <SectionHeader title="Community Wishes" />
        <FlatList
          data={communityWishes}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <PostCard
              title={item.title}
              description={item.description}
            />
          )}
        />

        <SectionHeader title="My Wishlist" />
        <FlatList
          data={myWishlist}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <WishlistCard
              title={item.title}
              status={item.status}
            />
          )}
        />

      </ScrollView>
    </AppContainer>
  );
}
