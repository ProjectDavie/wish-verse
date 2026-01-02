import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LibraryScreen() {
  // Mock playlists – later replace with device storage data
  const playlists = [
    { name: "Liked Songs", count: 124 },
    { name: "Daily Mix", count: 42 },
    { name: "Chill Vibes", count: 58 },
    { name: "Workout", count: 31 },
    { name: "Late Night", count: 27 },
    { name: "Road Trip", count: 19 },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Your Library</Text>

      <View style={styles.grid}>
        {playlists.map((playlist, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            {/* Playlist cover placeholder */}
            <View style={styles.cover}>
              <Text style={styles.coverText}>
                {playlist.name.charAt(0)}
              </Text>
            </View>

            <Text style={styles.name}>{playlist.name}</Text>
            <Text style={styles.count}>{playlist.count} songs</Text>
          </TouchableOpacity>
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
    backgroundColor: "#f3f4f6",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  cover: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  coverText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#2563eb",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  count: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});
