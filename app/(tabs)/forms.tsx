import ButtonGroup from "@/components/ButtonGroup";
import PassFailGroup from "@/components/PassFailGroup";
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
    { title: "Unit #:", input: true },
    { title: "First Aid Kit:", passFail: true },
    { title: "Spill Kit:", passFail: true },
    { title: "Fire Extinguisher:", passFail: true },
    { title: "Fire Fighting Equipment:", passFail: true },
    { title: "Fire Suppression System:", passFail: true },
  ];

  return (
    <ScrollView style={{ padding: 16 }}>
      <View style={{ gap: 16, marginBottom: 32 }}>
        <View
          style={{
            backgroundColor: "#f9f9f9",
            padding: 16,
            borderRadius: 10,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Company Information
          </Text>
          <View style={{ gap: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="business-outline" size={16} />
              <Text>Northern Timber Management</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="location-outline" size={16} s />
              <Text>Pineridge Chippers</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="calendar-outline" size={16} />
              <Text>Jun 09, 2025 7:40 PM</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#f9f9f9",
            padding: 16,
            borderRadius: 10,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            General Information
          </Text>
          <View style={{ gap: 20 }}>
            {generalInfo.map((item, index) => (
              <View key={index} style={{ gap: 5 }}>
                <Text>{item.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.button && <Button title={item.button} />}
                  {item.input && (
                    <TextInput
                      placeholder="Enter location"
                      placeholderTextColor={"gray"}
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                      }}
                    />
                  )}
                  <ButtonGroup />
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#f9f9f9",
            padding: 16,
            borderRadius: 10,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Inspection</Text>
          <View style={{ gap: 20 }}>
            {inspection.map((item, index) => (
              <View key={index} style={{ gap: 5 }}>
                <Text>{item.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  {item.passFail && <PassFailGroup />}
                  {item.button && <Button title={item.button} />}
                  {item.input && (
                    <TextInput
                      placeholder="Enter location"
                      placeholderTextColor={"gray"}
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                      }}
                    />
                  )}
                  <ButtonGroup />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
