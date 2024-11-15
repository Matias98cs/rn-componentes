import { View, Text, ViewProps } from "react-native";
import React from "react";

interface Props extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children, ...rest }: Props) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p shadow shadow-black/5 ${className}`}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
