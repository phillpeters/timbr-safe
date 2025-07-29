import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

export default function PassFailGroup() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
        borderRadius: 50,
        width: 110,
      }}
    >
      <TouchableOpacity>
        <MaterialCommunityIcons name="check" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="close" size={24} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: "gray" }}>N/A</Text>
      </TouchableOpacity>
    </View>
  );
}
