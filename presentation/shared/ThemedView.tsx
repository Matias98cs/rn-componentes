import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  className,
  margin = false,
  safe = false,
  bgColor,
  style,
  children,
}: Props) => {
  const backgroundColor = useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();
  return (
    <View
      // className={`${className} bg-ligth-background dark:bg-dark-background`}
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
