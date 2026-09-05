import { Text, View } from "react-native";
import { styles } from "@/src/theme/styles";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <View style={compact ? styles.logoCompact : styles.logo}>
      <Text style={styles.logoText}>VISTEL</Text>
      <Text style={styles.logoSub}>TELECOM</Text>
    </View>
  );
}
