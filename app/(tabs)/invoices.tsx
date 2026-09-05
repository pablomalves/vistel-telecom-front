import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { InvoiceCard } from "@/src/components/InvoiceCard";
import { mockCustomer } from "@/src/data/mock";
import { styles } from "@/src/theme/styles";

type Filter = "OPEN" | "PAID";

export default function InvoicesScreen() {
  const [filter, setFilter] = useState<Filter>("OPEN");
  const list = mockCustomer.invoices.filter((x) => x.status === filter);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Minhas faturas</Text>
        <Text style={styles.pageSubtitle}>Acompanhe seus pagamentos e vencimentos.</Text>
        <View style={styles.segment}>
          <Pressable style={[styles.segmentItem, filter === "OPEN" && styles.segmentActive]} onPress={() => setFilter("OPEN")}>
            <Text style={[styles.segmentText, filter === "OPEN" && styles.segmentTextActive]}>Em aberto</Text>
          </Pressable>
          <Pressable style={[styles.segmentItem, filter === "PAID" && styles.segmentActive]} onPress={() => setFilter("PAID")}>
            <Text style={[styles.segmentText, filter === "PAID" && styles.segmentTextActive]}>Pagas</Text>
          </Pressable>
        </View>
        {list.length === 0 ? (
          <View style={styles.emptyCard}>
            <View style={styles.emptyIcon}><Text style={{ fontSize: 24 }}>✓</Text></View>
            <Text style={styles.emptyTitle}>Nenhuma fatura encontrada</Text>
            <Text style={styles.emptyText}>{filter === "OPEN" ? "Você não possui faturas em aberto." : "Ainda não há pagamentos registrados."}</Text>
          </View>
        ) : (
          list.map((invoice) => <InvoiceCard key={invoice.id} invoice={invoice} onPress={() => router.push({ pathname: "/invoice-detail", params: { id: invoice.id } })} />)
        )}
        <View style={styles.secureNote}><Text style={styles.secureNoteText}>Seus dados financeiros serão carregados pelo backend seguro da Vistel.</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}
