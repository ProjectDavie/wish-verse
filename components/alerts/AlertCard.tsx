import { Text, TouchableOpacity } from "react-native";

type AlertCardProps = {
  title: string;
  description: string;
  time: string;
  onPress?: () => void;
};

const AlertCard = ({ title, description, time, onPress }: AlertCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-5 shadow"
    >
      <Text className="text-purple-900 text-lg font-semibold mb-1">
        {title}
      </Text>
      <Text className="text-purple-500 text-sm mb-2">{description}</Text>
      <Text className="text-purple-300 text-xs">{time}</Text>
    </TouchableOpacity>
  );
};

export default AlertCard;
