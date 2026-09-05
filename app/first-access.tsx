import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/src/components/Button";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";
import { formatCPF } from "@/src/theme/formatters";

export default function FirstAccessScreen() {
  const [cpf, setCpf] = useState(""); const [code, setCode] = useState(""); const [password, setPassword] = useState(""); const [confirm, setConfirm] = useState("");
  const createPassword = () => {
    if (cpf.replace(/\D/g, "").length !== 11) return Alert.alert("CPF inválido", "Digite o CPF do titular.");
    if (!code.trim()) return Alert.alert("Código necessário", "Digite o código de validação.");
    if (password.length < 6) return Alert.alert("Senha fraca", "Sua senha precisa ter pelo menos 6 caracteres.");
    if (password !== confirm) return Alert.alert("Senhas diferentes", "As senhas precisam ser iguais.");
    Alert.alert("Tudo certo!", "Sua senha foi criada. Agora você pode entrar.", [{ text: "Ir para login", onPress: () => router.replace("/login") }]);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={styles.pageContent} keyboardShouldPersistTaps="handled">
          <Pressable onPress={() => router.back()} style={styles.backButton}><Ionicons name="chevron-back" size={22} color={colors.primary} /><Text style={styles.backText}>Voltar</Text></Pressable>
          <Text style={styles.pageTitle}>Primeiro acesso</Text><Text style={styles.pageSubtitle}>Crie sua senha para acessar contrato, faturas e informações da sua conta.</Text>
          <Text style={styles.inputLabel}>CPF do titular</Text><View style={styles.inputWrap}><Ionicons name="person-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="000.000.000-00" placeholderTextColor={colors.placeholder} keyboardType="number-pad" value={cpf} maxLength={14} onChangeText={(v) => setCpf(formatCPF(v))} /></View>
          <Text style={styles.inputLabel}>Código de validação</Text><View style={styles.inputWrap}><Ionicons name="key-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="Código enviado pela Vistel" placeholderTextColor={colors.placeholder} value={code} onChangeText={setCode} /></View>
          <Text style={styles.inputLabel}>Nova senha</Text><View style={styles.inputWrap}><Ionicons name="lock-closed-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="Mínimo de 6 caracteres" placeholderTextColor={colors.placeholder} secureTextEntry value={password} onChangeText={setPassword} /></View>
          <Text style={styles.inputLabel}>Confirmar senha</Text><View style={styles.inputWrap}><Ionicons name="shield-checkmark-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="Digite novamente" placeholderTextColor={colors.placeholder} secureTextEntry value={confirm} onChangeText={setConfirm} /></View>
          <View style={styles.infoBox}><Ionicons name="information-circle-outline" size={21} color={colors.primary} /><Text style={styles.infoText}>O código e a validação real serão controlados pelo backend da Vistel.</Text></View>
          <Button title="Criar minha senha" onPress={createPassword} />
          <Pressable onPress={() => router.replace("/login")} style={styles.centerButton}><Text style={styles.linkText}>Já tenho acesso</Text></Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
