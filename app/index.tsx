import { View, Text } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { animationMenuRoutes } from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";

const ComponnentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <Link key={index} href={route.name.split("/")[0] as Href}>
          {route.title}
        </Link>
      ))}
    </ThemedView>
  );
};

export default ComponnentsApp;
