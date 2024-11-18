import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "background"
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRefreshing(false);
    console.log("Refreshed");
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "orange", "green"]}
          // progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText className="text-center pt-5">
          PullToRefreshScreen
        </ThemedText>
        <ThemedText className="text-center pt-5 underline" type="h2">
          Deslize para abajo para refrescar
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
