import { View, Text, Platform } from "react-native";
import React from "react";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import { StatusBar } from "expo-status-bar";
import ThemedButton from "@/presentation/shared/ThemedButton";
import { router } from "expo-router";

const ModalScreenDos = () => {
  return (
    <ThemedView className="justify-center items-center flex-1">
      <ThemedText className="text-center pt-5 underline" type="h2">
        Hola, soy otro Modal
      </ThemedText>

      <ThemedButton onPress={() => router.dismiss()} className="mt-4">
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreenDos;
