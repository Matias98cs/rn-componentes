import { useColorScheme } from "nativewind";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text } from "react-native";

const ThemesScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
          text="Dark Mode"
          className="mb-5"
        />

        <ThemedSwitch
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
          text="System Mode"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
