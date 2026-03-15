import { Pressable, Text, View } from "react-native";

type FriendCardProps = {
  name: string;
  status: string;
  onChat?: () => void;
  onRemove?: () => void;
};

const FriendCard = ({ name, status, onChat, onRemove }: FriendCardProps) => {
  const StatusBadge = ({ status }: { status: string }) => {
    const color =
      status === "Online"
        ? "bg-green-100 text-green-600"
        : status === "Busy"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-gray-100 text-gray-400";

    return (
      <Text className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
        {status}
      </Text>
    );
  };

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow">
      <View className="flex-row items-center justify-between">
        {/* Left */}
        <View className="flex-row items-center gap-4">
          <View className="h-12 w-12 rounded-full bg-purple-600 items-center justify-center">
            <Text className="text-white font-bold text-lg">
              {name.charAt(0)}
            </Text>
          </View>
          <View>
            <Text className="text-purple-900 font-semibold text-lg">
              {name}
            </Text>
            <StatusBadge status={status} />
          </View>
        </View>

        {/* Actions */}
        <View className="flex-row gap-2">
          <Pressable
            onPress={onChat}
            className="px-3 py-2 rounded-lg bg-purple-100"
          >
            <Text className="text-purple-800 text-xs font-semibold">Chat</Text>
          </Pressable>

          <Pressable
            onPress={onRemove}
            className="px-3 py-2 rounded-lg bg-red-100"
          >
            <Text className="text-red-600 text-xs font-semibold">Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FriendCard;
