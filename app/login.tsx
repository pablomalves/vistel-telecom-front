import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/src/components/Button";
import { Logo } from "@/src/components/Logo";
import { colors } from "@/src/theme/colors";
import { styles } from "@/src/theme/styles";
import { formatCPF } from "@/src/theme/formatters";

export default function LoginScreen() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const login = () => {
    const clean = cpf.replace(/\D/g, "");
    if (clean.length !== 11) return Alert.alert("CPF inválido", "Digite um CPF com 11 números.");
    if (password.length < 4) return Alert.alert("Senha inválida", "Digite sua senha.");
    router.replace("/(tabs)");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={styles.loginContent} keyboardShouldPersistTaps="handled">
          <View style={styles.loginTop}><Logo /><Text style={styles.loginTitle}>Bem-vindo!</Text><Text style={styles.loginSubtitle}>Acesse sua conta Vistel e tenha seus serviços sempre à mão.</Text></View>
          <View style={styles.formCard}>
            <Text style={styles.inputLabel}>CPF</Text>
            <View style={styles.inputWrap}><Ionicons name="person-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="000.000.000-00" placeholderTextColor={colors.placeholder} keyboardType="number-pad" value={cpf} maxLength={14} onChangeText={(v) => setCpf(formatCPF(v))} /></View>
            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputWrap}><Ionicons name="lock-closed-outline" size={20} color={colors.muted} /><TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor={colors.placeholder} secureTextEntry={!showPassword} value={password} onChangeText={setPassword} /><Pressable onPress={() => setShowPassword((v) => !v)} hitSlop={10}><Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={21} color={colors.muted} /></Pressable></View>
            <Pressable style={styles.forgotButton} onPress={() => Alert.alert("Recuperação", "A recuperação de senha será conectada ao backend pelo seu desenvolvedor.")}><Text style={styles.linkText}>Esqueci minha senha</Text></Pressable>
            <Button title="Entrar" onPress={login} />
            <View style={styles.dividerRow}><View style={styles.divider} /><Text style={styles.dividerText}>ou</Text><View style={styles.divider} /></View>
            <Pressable style={styles.outlineButton} onPress={() => router.push("/first-access")}><Text style={styles.outlineButtonText}>Primeiro acesso</Text></Pressable>
          </View>
          <Text style={styles.loginFooter}>Vistel Telecom • Internet que conecta você</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
