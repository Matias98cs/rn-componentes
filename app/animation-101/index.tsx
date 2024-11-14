import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const animateOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animateOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      // easing: Easing.elastic(3),
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animateOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
    // }).start(() => animatedTop.setValue(-100));

    // Animated.timing(animatedTop, {
    //   toValue: -100,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start()
  };

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

      <ThemedButton className="my-5" onPress={fadeIn}>
        Fade In
      </ThemedButton>

      <ThemedButton className="my-5" onPress={fadeOut}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
