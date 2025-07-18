import { Text } from "@/components/Text";
import { Link } from "expo-router";
import { View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
      <Link href="/about">
        <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
          Go to About screen
        </Text>
      </Link>
    </View>
  );
};

export default Home;
