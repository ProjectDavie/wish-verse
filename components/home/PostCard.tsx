import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
};

export default function PostCard({ title, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4
  }
});
