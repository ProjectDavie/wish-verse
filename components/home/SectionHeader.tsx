import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  }
});
