# Vistel Telecom — Frontend

Frontend do aplicativo do cliente Vistel Telecom, desenvolvido em React Native + Expo + TypeScript.

## Estrutura
- `app/` — telas e navegação
- `src/components/` — componentes reutilizáveis
- `src/data/mock.ts` — dados locais de demonstração
- `src/theme/` — identidade visual, estilos e formatadores
- `assets/` — recursos visuais
- `preview/` — prévia interativa em HTML

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

## Login de demonstração
Use qualquer CPF com 11 números e a senha `123456`.

## Backend
Este repositório contém somente o frontend. A integração com MK Solutions/API, autenticação real, pagamentos e demais serviços deve ser conectada pelo backend responsável.
