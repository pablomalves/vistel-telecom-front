import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { mockCustomer } from "@/src/data/mock";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export default function InvoiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const invoice = mockCustomer.invoices.find((x) => x.id === id) ?? mockCustomer.invoices[0];
  const paid = invoice.status === "PAID";

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color={colors.primary} />
          <Text style={styles.backText}>Voltar</Text>
        </Pressable>

        <Text style={styles.pageTitle}>Detalhes da fatura</Text>

        <View style={styles.invoiceDetailHero}>
          <View style={styles.invoiceDetailIcon}>
            <Ionicons name={paid ? "checkmark" : "receipt-outline"} size={29} color={colors.primary} />
          </View>
          <Text style={styles.invoiceDetailReference}>Fatura {invoice.reference}</Text>
          <Text style={styles.invoiceDetailAmount}>R$ {invoice.amount.toFixed(2).replace(".", ",")}</Text>
          <View style={[styles.detailStatusPill, paid ? styles.paidPill : styles.openPill]}>
            <Text style={[styles.detailStatusText, { color: paid ? colors.success : colors.warning }]}>
              {paid ? "Paga" : "Em aberto"}
            </Text>
          </View>
        </View>

        <View style={styles.detailCard}>
          <InfoRow label="Vencimento" value={invoice.dueDate} />
          <InfoRow label={paid ? "Pagamento realizado em" : "Status"} value={paid ? invoice.paidDate ?? "-" : "Aguardando pagamento"} />
          <InfoRow label="Contrato" value={`#${mockCustomer.contract.number}`} />
          <InfoRow label="Plano" value={mockCustomer.contract.plan} />
        </View>

        {!paid && (
          <Pressable style={styles.payButton} onPress={() => {}}>
            <Text style={styles.payButtonText}>Pagar fatura</Text>
            <Ionicons name="arrow-forward" size={19} color={colors.white} />
          </Pressable>
        )}

        <Text style={styles.detailFooter}>
          A forma de pagamento será disponibilizada pelo backend/integrador da Vistel.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoRowLabel}>{label}</Text>
      <Text style={styles.infoRowValue}>{value}</Text>
    </View>
  );
}
