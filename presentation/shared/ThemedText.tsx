import { View, Text, TextProps } from "react-native";
import React from "react";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
    className={[
        "text-ligth-text dark:text-dark-text",
        type === "normal" ? "text-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(' ')}
      {...rest}
    />
  );
};

export default ThemedText;