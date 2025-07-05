import { Text } from "@/components/Text";
import { Link } from "expo-router";
import { View } from "react-native";

const About = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About screen</Text>
      <Link href="/">
        <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
          Go to Home screen
        </Text>
      </Link>
    </View>
  );
};

export default About;
