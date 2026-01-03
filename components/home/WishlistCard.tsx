import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  status: string;
};

export default function WishlistCard({ title, status }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#e8f0ff",
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  status: {
    marginTop: 4,
    color: "#555"
  }
});
