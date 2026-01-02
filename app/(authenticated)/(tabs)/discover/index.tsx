import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  const genres = [
    "Afrobeats",
    "Hip Hop",
    "Pop",
    "R&B",
    "Jazz",
    "Rock",
    "EDM",
    "Gospel",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Music</Text>

      <View style={styles.grid}>
        {genres.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    height: 120,
    backgroundColor: "#f3f4f6",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
});
