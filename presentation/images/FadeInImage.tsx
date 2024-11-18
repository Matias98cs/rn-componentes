import {
  View,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Image,
  ImageStyle,
  Animated,
} from "react-native";
import React, { useState } from "react";
import useAnimation from "@/hooks/useAnimation";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const { animateOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <ActivityIndicator size={30} style={{ position: "absolute" }} />
      )}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animateOpacity }]}
        onLoadEnd={() => {
          fadeIn({
            duration: 1000,
          });
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
