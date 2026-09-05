# Vistel Telecom — Frontend

Frontend do aplicativo do cliente Vistel Telecom, desenvolvido em React Native + Expo + TypeScript.

## Escopo

Este repositório contém **somente o frontend**. A integração com MK Solutions, autenticação real, faturas, pagamentos e demais serviços será implementada pelo desenvolvedor no backend/API.

## Telas

- Login com CPF e senha
- Primeiro acesso / criação de senha
- Dashboard do cliente
- Status do contrato: Ativo ou Bloqueado
- Faturas em aberto
- Histórico de faturas pagas
- Detalhes da fatura
- Perfil
- Navegação inferior: Início, Faturas, Contrato e Perfil

> A seção de consumo não faz parte deste frontend.

## Estrutura

- `app/` — telas e navegação Expo Router
- `src/components/` — componentes reutilizáveis
- `src/data/mock.ts` — dados locais de demonstração; substituir pelas chamadas da API
- `src/theme/` — identidade visual, estilos e formatadores
- `.github/workflows/typecheck.yml` — verificação TypeScript no GitHub Actions

## Executar

```bash
npm install
npx expo start
```

Android:

```bash
npm run android
```

iOS:

```bash
npm run ios
```

Web:

```bash
npm run web
```

## Dados de demonstração

O frontend usa `src/data/mock.ts` para funcionar sem backend. O desenvolvedor pode manter as interfaces/tipos existentes e substituir o mock por um client HTTP, contexto de autenticação e endpoints da API.

## Observação

O arquivo SVG de referência original não foi incluído porque possui aproximadamente 5 MB e não é utilizado pelo código atual; o componente `Logo` já renderiza a identidade textual diretamente.
