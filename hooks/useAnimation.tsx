import React, { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
  const animateOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDrive = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animateOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDrive = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animateOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing,
    }).start(callback);
    // }).start(() => animatedTop.resetAnimation());
    // }).start(() => animatedTop.setValue(-100));

    // Animated.timing(animatedTop, {
    //   toValue: -100,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start()
  };

  const startMovingTopPosition = ({
    initinialPosition = -100,
    duration = 300,
    toValue = 0,
    useNativeDrive = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    
    animatedTop.setValue(initinialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing,
      //   easing: Easing.linear,
      // easing: Easing.elastic(3),
      // easing: Easing.bounce,
    }).start(callback);
  };

  return {
    animateOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};

export default useAnimation;
