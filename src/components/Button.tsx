import { ActivityIndicator, Pressable, Text } from "react-native";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export function Button({
  title,
  onPress,
  loading = false,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [styles.primaryButton, pressed && { opacity: 0.86 }]}
    >
      {loading ? <ActivityIndicator color={colors.white} /> : <Text style={styles.primaryButtonText}>{title}</Text>}
    </Pressable>
  );
}
