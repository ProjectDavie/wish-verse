import { Text, View } from "react-native";

type FriendStatsProps = {
  onlineCount: number;
  offlineCount: number;
};

const FriendStats = ({ onlineCount, offlineCount }: FriendStatsProps) => {
  return (
    <View className="flex-row justify-between mb-6">
      <View className="bg-white rounded-xl p-4 flex-1 mr-2 items-center">
        <Text className="text-purple-500 text-sm">Online</Text>
        <Text className="text-purple-900 font-bold text-2xl">
          {onlineCount}
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4 flex-1 ml-2 items-center">
        <Text className="text-purple-500 text-sm">Offline</Text>
        <Text className="text-purple-900 font-bold text-2xl">
          {offlineCount}
        </Text>
      </View>
    </View>
  );
};

export default FriendStats;
