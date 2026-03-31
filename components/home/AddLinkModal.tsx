import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: string;
  image?: string;
  details: string;
}

interface AddLinkModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export default function AddLinkModal({
  visible,
  onClose,
  onAdd,
}: AddLinkModalProps) {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!link.trim()) return;
    setLoading(true);

    try {
      // Instagram oEmbed public API
      const url = `https://graph.facebook.com/v15.0/instagram_oembed?url=${encodeURIComponent(
        link,
      )}`;
      const res = await fetch(url);
      const data = await res.json();

      const newProduct: Product = {
        id: Date.now().toString(),
        image: data.thumbnail_url,
        details: data.title || "No caption",
      };

      onAdd(newProduct);
      setLink("");
      onClose();
    } catch (err) {
      console.error("Failed to fetch Instagram post:", err);
    } finally {
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
      <View className="flex-1 bg-black/50 justify-center items-center px-4">
        <View className="w-full bg-white rounded-2xl p-6">
          <Text className="text-xl font-bold mb-4">Add Instagram Product</Text>

          <TextInput
            className="border border-gray-300 rounded-xl p-3 mb-4"
            placeholder="Enter Instagram link here"
            value={link}
            onChangeText={setLink}
            autoCapitalize="none"
          />

          {loading && (
            <ActivityIndicator size="large" color="#000" className="my-4" />
          )}

          <View className="flex-row justify-end space-x-3 mt-4">
            <TouchableOpacity
              className="bg-gray-300 px-4 py-2 rounded-xl"
              onPress={onClose}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black px-4 py-2 rounded-xl"
              onPress={handleSubmit}
            >
              <Text className="text-white">Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
