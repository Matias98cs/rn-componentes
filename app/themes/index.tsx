import { useColorScheme } from "nativewind";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text } from "react-native";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

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
