import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface AddButtonProps {
  onPress: () => void;
}

export default function AddButton({ onPress }: AddButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
      }}
    >
      <Text style={{ color: "white", fontSize: 28, lineHeight: 28 }}>+</Text>
    </TouchableOpacity>
  );
}
