import { useThemeColor } from "@/hooks/useThemeColor";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const InfiniteScrollScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newNumbers = Array.from(
      { length: 5 },
      (_, index) => index + numbers.length
    );

    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 3000);
  };
  return (
    <ThemedView>
      <FlatList
        data={numbers}
        // renderItem={({ item }) => <ListItem number={item} />}
        renderItem={({ item }) => <ComponentFadeInImage number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemsProps {
  number: number;
}

// Componente con animación customizada para Ios por que no tiene animacion por defecto
const ComponentFadeInImage = ({ number }: ListItemsProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/350`}
      style={{
        height: 350,
        width: "100%",
      }}
    />
  );
};

// Componente con animation por defecto en android
const ListItem = ({ number }: ListItemsProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/350` }}
      style={{ width: "100%", height: 350 }}
    />
  );
};
