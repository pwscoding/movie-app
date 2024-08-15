import { Text, View } from "react-native";
import tw from 'twrnc'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={tw`bg-red-500 text-white text-6xl p-4`}>Tailwindcss</Text>
    </View>
  );
}
