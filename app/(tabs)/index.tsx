import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/src/components/Header";
import { InvoiceCard } from "@/src/components/InvoiceCard";
import { SectionTitle } from "@/src/components/SectionTitle";
import { mockCustomer } from "@/src/data/mock";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export default function HomeScreen() {
  const open = mockCustomer.invoices.filter((x) => x.status === "OPEN");
  const paid = mockCustomer.invoices.filter((x) => x.status === "PAID");
  const totalOpen = open.reduce((sum, item) => sum + item.amount, 0);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.homeContent} showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.heroCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroEyebrow}>SEU CONTRATO</Text>
            <Text style={styles.heroContract}>#{mockCustomer.contract.number}</Text>
            <View style={styles.activePill}><View style={styles.activeDot} /><Text style={styles.activeText}>{mockCustomer.contract.status === "ACTIVE" ? "Ativo" : "Bloqueado"}</Text></View>
          </View>
          <View style={styles.heroIcon}><Ionicons name="wifi" size={30} color={colors.primary} /></View>
        </View>
        <SectionTitle title="Resumo da conta" />
        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}><View style={styles.summaryIcon}><Ionicons name="alert-circle-outline" size={21} color={colors.warning} /></View><Text style={styles.summaryNumber}>{open.length}</Text><Text style={styles.summaryLabel}>Faturas em aberto</Text></View>
          <View style={styles.summaryCard}><View style={styles.summaryIcon}><Ionicons name="checkmark-circle-outline" size={21} color={colors.success} /></View><Text style={styles.summaryNumber}>{paid.length}</Text><Text style={styles.summaryLabel}>Faturas pagas</Text></View>
        </View>
        {open.length > 0 && <><SectionTitle title="Próxima fatura" action="Ver todas" onAction={() => router.push("/(tabs)/invoices")} /><InvoiceCard invoice={open[0]} featured /><View style={styles.totalBar}><Text style={styles.totalLabel}>Total em aberto</Text><Text style={styles.totalValue}>R$ {totalOpen.toFixed(2).replace(".", ",")}</Text></View></>}
        <SectionTitle title="Acesso rápido" />
        <Pressable style={styles.quickCard} onPress={() => router.push("/(tabs)/contract")}><View style={styles.quickIcon}><Ionicons name="document-text-outline" size={23} color={colors.primary} /></View><View style={{ flex: 1 }}><Text style={styles.quickTitle}>Meu contrato</Text><Text style={styles.quickSubtitle}>Consulte seu plano e dados do contrato</Text></View><Ionicons name="chevron-forward" size={20} color={colors.muted} /></Pressable>
        <Pressable style={styles.quickCard} onPress={() => router.push("/(tabs)/invoices")}><View style={styles.quickIcon}><Ionicons name="receipt-outline" size={23} color={colors.primary} /></View><View style={{ flex: 1 }}><Text style={styles.quickTitle}>Minhas faturas</Text><Text style={styles.quickSubtitle}>Veja pagamentos e faturas em aberto</Text></View><Ionicons name="chevron-forward" size={20} color={colors.muted} /></Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
