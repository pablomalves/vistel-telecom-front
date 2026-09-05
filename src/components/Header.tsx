import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Logo } from "@/src/components/Logo";
import { colors } from "@/src/theme/colors";
import { mockCustomer } from "@/src/data/mock";
import { styles } from "@/src/theme/styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Logo compact />
      <View style={styles.headerRight}>
        <View style={styles.headerNotification}>
          <Ionicons name="notifications-outline" size={21} color={colors.primary} />
          <View style={styles.notificationDot} />
        </View>
        <View style={styles.headerAvatar}>
          <Text style={styles.headerAvatarText}>{mockCustomer.name.charAt(0)}</Text>
        </View>
      </View>
    </View>
  );
}
