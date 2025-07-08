import {
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
