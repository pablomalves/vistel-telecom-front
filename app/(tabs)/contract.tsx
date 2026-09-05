import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { mockCustomer } from "@/src/data/mock";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export default function ContractScreen() {
  const c = mockCustomer.contract;
  const active = c.status === "ACTIVE";

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Meu contrato</Text>
        <Text style={styles.pageSubtitle}>Confira as informações do seu serviço Vistel.</Text>
        <View style={styles.contractStatusCard}>
          <View style={styles.contractStatusIcon}><Ionicons name="wifi" size={26} color={colors.primary} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.contractStatusLabel}>STATUS DO CONTRATO</Text>
            <Text style={styles.contractStatusValue}>{active ? "Ativo" : "Bloqueado"}</Text>
          </View>
          <View style={[styles.bigStatusDot, !active && { backgroundColor: colors.danger }]} />
        </View>
        <View style={styles.detailCard}>
          <Detail icon="document-outline" label="Número do contrato" value={`#${c.number}`} />
          <Detail icon="speedometer-outline" label="Plano contratado" value={c.plan} />
          <Detail icon="location-outline" label="Endereço de instalação" value={c.address} />
          <Detail icon="calendar-outline" label="Data de contratação" value={c.startDate} />
        </View>
        <View style={styles.contractInfoBox}>
          <Ionicons name="information-circle-outline" size={21} color={colors.primary} />
          <Text style={styles.infoText}>Para alterações contratuais, entre em contato com a equipe de atendimento da Vistel.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Detail({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailIcon}><Ionicons name={icon} size={20} color={colors.primary} /></View>
      <View style={{ flex: 1 }}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
}
