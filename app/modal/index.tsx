import ThemedView from "@/presentation/shared/ThemedView";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="text-ligth-text dark:text-dark-text my-2 text-xl">
          Abrir Modal
        </Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
