import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin className="mt-2">
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoComplete="additional-name"
              value={form.name}
              onChangeText={(value: string) =>
                setForm({ ...form, name: value })
              }
            />

            <ThemedTextInput
              placeholder="Email"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(value: string) =>
                setForm({ ...form, email: value })
              }
            />

            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(value: string) =>
                setForm({ ...form, phone: value })
              }
            />
          </ThemedCard>

          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="p-2 my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
            className="mb-5"
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemedTextInput
              placeholder="Password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(value: string) =>
                setForm({ ...form, password: value })
              }
            />
          </ThemedCard>
        </ThemedView>

        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
