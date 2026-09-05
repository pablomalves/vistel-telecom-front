import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Invoice } from "@/src/types";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";

export function InvoiceCard({
  invoice,
  featured = false,
  onPress,
}: {
  invoice: Invoice;
  featured?: boolean;
  onPress?: () => void;
}) {
  const paid = invoice.status === "PAID";
  const content = (
    <>
      <View style={[styles.invoiceIcon, featured && styles.invoiceIconFeatured]}>
        <Ionicons
          name={paid ? "checkmark-circle-outline" : "receipt-outline"}
          size={23}
          color={paid ? colors.success : colors.primary}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.invoiceTitle}>Fatura {invoice.reference}</Text>
        <Text style={styles.invoiceMeta}>
          {paid ? `Paga em ${invoice.paidDate ?? "-"}` : `Vencimento ${invoice.dueDate}`}
        </Text>
      </View>
      <View style={styles.invoiceRight}>
        <Text style={styles.invoiceAmount}>R$ {invoice.amount.toFixed(2).replace(".", ",")}</Text>
        <Text style={paid ? styles.paidText : styles.openText}>{paid ? "Paga" : "Em aberto"}</Text>
      </View>
    </>
  );

  return onPress ? (
    <Pressable style={({ pressed }) => [styles.invoiceCard, featured && styles.invoiceFeatured, pressed && { opacity: 0.9 }]} onPress={onPress}>
      {content}
    </Pressable>
  ) : (
    <View style={[styles.invoiceCard, featured && styles.invoiceFeatured]}>{content}</View>
  );
}
