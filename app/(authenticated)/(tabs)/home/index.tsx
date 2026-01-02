import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
  const lastPlayed = ["Blinding Lights", "God's Plan", "Calm Down"];
  const quickPicks = ["Afrobeats", "Hip Hop", "Pop", "R&B", "Jazz", "Rock"];
  const trending = ["Houdini", "Water", "Unavailable"];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Search music</Text>
      </TouchableOpacity>

      {/* Last Played */}
      <Text style={styles.sectionTitle}>Last Played</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lastPlayed.map((item, index) => (
          <View key={index} style={styles.lastPlayedCard}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Quick Picks */}
      <Text style={styles.sectionTitle}>Quick Picks</Text>
      <View style={styles.grid}>
        {quickPicks.map((item, index) => (
          <View key={index} style={styles.gridCard}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Trending */}
      <Text style={styles.sectionTitle}>Trending</Text>
      <FlatList
        data={trending}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.trendingCard}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  searchButton: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchText: {
    color: "#777",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  lastPlayedCard: {
    width: 160,
    height: 100,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    justifyContent: "center",
    padding: 12,
    marginRight: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gridCard: {
    width: "48%",
    height: 80,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  trendingCard: {
    width: 140,
    height: 140,
    backgroundColor: "#e5e7eb",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
  },
});
