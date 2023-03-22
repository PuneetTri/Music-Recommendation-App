import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";

const WatchlistItem = ({ posterImgUrl, title, description, link }) => {
  return (
    <View>
      <View className="p-2 flex-row space-x-2">
        <Image
          source={{
            uri: posterImgUrl,
          }}
          className="h-24 w-16"
        />
        <View className="flex-auto">
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="" numberOfLines={3}>
            {description}
          </Text>
          <Text className="text-gray-500" numberOfLines={1}>
            Horror Director Actor, Actress, Side Character, Another Side
            Character
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WatchlistItem;
