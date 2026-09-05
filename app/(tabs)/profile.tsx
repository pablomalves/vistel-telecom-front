import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { mockCustomer } from "@/src/data/mock";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>Meu perfil</Text>
        <Text style={styles.pageSubtitle}>Gerencie seus dados e preferências.</Text>
        <View style={styles.profileCard}>
          <View style={styles.avatar}><Text style={styles.avatarText}>{mockCustomer.name.charAt(0)}</Text></View>
          <Text style={styles.profileName}>{mockCustomer.name}</Text>
          <Text style={styles.profileCpf}>CPF •••.•••.•••-00</Text>
        </View>
        <View style={styles.profileMenu}>
          <MenuItem icon="person-outline" title="Dados pessoais" subtitle="Nome e CPF" />
          <MenuItem icon="lock-closed-outline" title="Alterar senha" subtitle="Atualize sua senha de acesso" />
          <MenuItem icon="notifications-outline" title="Notificações" subtitle="Preferências de avisos" />
          <MenuItem icon="help-circle-outline" title="Ajuda e suporte" subtitle="Fale com a Vistel" />
        </View>
        <Pressable style={styles.logoutButton} onPress={() => Alert.alert("Sair da conta", "Deseja realmente sair?", [{ text: "Cancelar", style: "cancel" }, { text: "Sair", style: "destructive", onPress: () => router.replace("/login") }])}>
          <Ionicons name="log-out-outline" size={21} color={colors.danger} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </Pressable>
        <Text style={styles.version}>Vistel Telecom • versão 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function MenuItem({ icon, title, subtitle }: { icon: keyof typeof Ionicons.glyphMap; title: string; subtitle: string }) {
  return (
    <Pressable style={styles.profileItem} onPress={() => Alert.alert(title, "Esta função ficará conectada ao backend da Vistel.")}>
      <View style={styles.profileItemIcon}><Ionicons name={icon} size={21} color={colors.primary} /></View>
      <View style={{ flex: 1 }}><Text style={styles.profileItemTitle}>{title}</Text><Text style={styles.profileItemSubtitle}>{subtitle}</Text></View>
      <Ionicons name="chevron-forward" size={19} color={colors.muted} />
    </Pressable>
  );
}
