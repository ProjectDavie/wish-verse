import React, { useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface AddLinkModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddLinkModal({ visible, onClose }: AddLinkModalProps) {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!link.trim()) return;
    setLoading(true);

    try {
      // Simulate processing link
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLink("");
      onClose();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: "95%", // larger width
            maxWidth: 500, // optional max width for tablets
            backgroundColor: "white",
            borderRadius: 20,
            padding: 30, // more padding
            elevation: 8,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
            Add New Link
          </Text>

          <TextInput
            placeholder="Enter the link here"
            value={link}
            onChangeText={setLink}
            style={{
              borderWidth: 1,
              borderColor: "#D1D5DB",
              borderRadius: 10,
              padding: 16,
              fontSize: 16,
              marginBottom: 20,
            }}
          />

          {loading && (
            <ActivityIndicator
              size="large"
              color="black"
              style={{ marginBottom: 20 }}
            />
          )}

          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: "black",
              paddingVertical: 16,
              borderRadius: 10,
              alignItems: "center",
            }}
            disabled={loading}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Add
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
            style={{ marginTop: 16, alignItems: "center" }}
            disabled={loading}
          >
            <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
