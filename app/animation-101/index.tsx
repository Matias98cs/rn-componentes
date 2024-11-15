import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const {
    animateOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-ligth-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animateOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700,
          });
        }}
      >
        Fade In
      </ThemedButton>

      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
