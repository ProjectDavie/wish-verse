import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");

export default function SamplesScreen() {
  const samples = [
    {
      title: "As It Was",
      artist: "Harry Styles",
      chorus: "You know it’s not the same as it was",
    },
    {
      title: "Break My Soul",
      artist: "Beyoncé",
      chorus: "You won’t break my soul",
    },
    {
      title: "Unholy",
      artist: "Sam Smith",
      chorus: "He’s gettin’ hot at the body shop",
    },
  ];

  return (
    <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
      {samples.map((item, index) => (
        <View key={index} style={styles.frame}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
          <Text style={styles.chorus}>“{item.chorus}”</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  frame: {
    height,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
    color: "#111",
  },
  artist: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  chorus: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2563eb",
    textAlign: "center",
    lineHeight: 32,
  },
});
