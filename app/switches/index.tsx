import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import React, { useState } from "react";
import { Switch, StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
const Switches = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-4"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
