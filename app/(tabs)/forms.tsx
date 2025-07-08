import ButtonGroup from "@/components/ButtonGroup";
import { Text } from "@/components/Text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, ScrollView, TextInput, View } from "react-native";

export default function Forms() {
  const generalInfo = [
    { title: "Site/Job #:", button: "select one" },
    { title: "Inspector:", button: "select worker" },
    { title: "Location:", input: true },
  ];

  const inspection = [
    { title: "Unit #:", button: "select one" },
    { title: "First Aid Kit:", button: "select one" },
    { title: "Spill Kit:", button: "select one" },
    { title: "Fire Extinguisher:", button: "select one" },
    { title: "Fire Fighting Equipment:", button: "select one" },
    { title: "Fire Suppression System:", button: "select one" },
  ];
  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 20 }}>Company Information</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="business-outline" size={16} />
            <Text>Northern Timber Management</Text>
          </View>
          <View>
            <Ionicons name="location-outline" size={16} s />
            <Text>Pineridge Chippers</Text>
          </View>
          <View>
            <Ionicons name="calendar-outline" size={16} />
            <Text>Jun 09, 2025 7:40 PM</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>General Information</Text>
        <View>
          {generalInfo.map((item, index) => (
            <View key={index}>
              <Text>{item.title}</Text>
              <View>
                {item.button && <Button title={item.button} />}
                {item.input && <TextInput placeholder="Enter location" />}
                <ButtonGroup />
              </View>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text>Inspection</Text>
        <View>
          {inspection.map((item, index) => (
            <View key={index}>
              <Text>{item.title}</Text>
              <View>
                {item.button && <Button title={item.button} />}
                {item.input && <TextInput placeholder="Enter location" />}
                <ButtonGroup />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
