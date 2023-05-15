import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <View className="flex-row items-center space-x-4 p-4">
        <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
          <ChevronLeftIcon size={30} color="white" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-white">Sign up</Text>
      </View>

      <View className="p-8 space-y-4">
        <View className="space-y-2">
          <Text className="text-white">Name</Text>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor={"#6B7280"}
            style={{ borderBottomWidth: 1 }}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-white">Email</Text>
          <TextInput
            placeholder="johndoe@mail.com"
            placeholderTextColor={"#6B7280"}
            style={{ borderBottomWidth: 1 }}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-white">Password</Text>
          <TextInput
            placeholder="Pick a strong password"
            placeholderTextColor={"#6B7280"}
            style={{ borderBottomWidth: 1 }}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <TouchableOpacity>
          <View className="bg-green-500 items-center p-4 rounded-lg">
            <Text className="text-white">Create Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="self-center"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white">
            Already have an account?{" "}
            <Text className="text-green-500">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
