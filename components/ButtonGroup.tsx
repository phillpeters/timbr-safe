import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const ButtonGroup = () => {
  return (
    <View
      style={{
        backgroundColor: "#ededed",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
        borderRadius: 50,
        width: 110,
      }}
    >
      <MaterialCommunityIcons
        name="message-reply-text"
        size={24}
        color="black"
      />
      <MaterialCommunityIcons name="camera" size={24} color="black" />
      <MaterialCommunityIcons name="flag" size={24} color="black" />
    </View>
  );
};

export default ButtonGroup;
