# 📱 Lattes de Bolso

> Currículo digital pessoal desenvolvido em React Native com Expo — uma versão mobile do currículo Lattes.

---

## 📋 Sobre o Projeto

O **Lattes de Bolso** é um aplicativo mobile que funciona como um currículo digital interativo. Ele apresenta informações acadêmicas, profissionais e técnicas de forma organizada e elegante, inspirado na plataforma Lattes do CNPq.

O app foi desenvolvido por **Felipe Santos**, estudante de Sistemas para Internet no IFRN — Campus Canguaretama.

---

## 📸 Telas

O aplicativo conta com as seguintes telas:

| Tela | Descrição |
|------|-----------|
| **Home** | Menu principal com navegação para todas as seções |
| **Perfil** | Dados pessoais, bio e tecnologias dominadas |
| **Formação Acadêmica** | Graduação e pós-graduação |
| **Cursos** | Certificados e capacitações concluídos |
| **Habilidades** | Competências técnicas organizadas por categoria |
| **Conhecimentos** | Áreas de domínio |
| **Links** | Lattes, LinkedIn e portfólio |

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) — Framework principal
- [Expo](https://expo.dev/) — Plataforma de desenvolvimento
- [React Navigation](https://reactnavigation.org/) — Navegação entre telas
- [Expo Vector Icons](https://icons.expo.fyi/) — Ícones (Ionicons + MaterialCommunityIcons)

---

## 📁 Estrutura do Projeto

```
lattes-main/
├── assets/
│   ├── certificates/        # Imagens dos certificados
│   ├── icon.png
│   ├── splash-icon.png
│   └── perfil.png
├── src/
│   ├── components/
│   │   ├── profile/         # ProfileHeader, BioCard, InfoRow, SectionTitle, TechPill
│   │   ├── courses/         # CourseCard
│   │   ├── formations/      # FormationCard
│   │   ├── skills/          # SkillSection
│   │   └── ButtonCustom.jsx
│   ├── constants/
│   │   ├── colors.js        # Paleta de cores global
│   │   ├── courses.js       # Dados dos cursos
│   │   └── formations.js    # Dados das formações
│   └── pages/
│       ├── Home.jsx
│       ├── Profile.jsx
│       ├── Education.jsx
│       ├── Courses.jsx
│       ├── Formations.jsx
│       ├── Skills.jsx
│       └── Links.jsx
├── App.js                   # Configuração da navegação
├── app.json                 # Configuração do Expo
└── package.json
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado
- Aplicativo **Expo Go** no celular (Android ou iOS)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lattes.git

# Acesse a pasta do projeto
cd lattes-main

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Após iniciar, escaneie o QR Code com o aplicativo **Expo Go** no celular, ou pressione:
- `a` para abrir no emulador Android
- `i` para abrir no simulador iOS
- `w` para abrir no navegador (web)

---

## 🎨 Design

O app utiliza uma identidade visual elegante com:

- **Fundo escuro** (`#0f0f0f`) nos cabeçalhos
- **Dourado** (`#e5c97e`) como cor de destaque
- **Fundo claro** (`#f5f4f0`) nas listagens
- Animações suaves com `Animated` API do React Native

---

## 📚 Cursos e Certificados

| Curso | Instituição | Status |
|-------|-------------|--------|
| CC50 — Ciência da Computação de Harvard | Harvard University • Fundação Estudar | Em andamento |
| Introdução ao Desenvolvimento de APIs | — | Concluído |
| Estruturas de Controle em Java | DIO | Concluído |
| Java e a Arte da Abstração com Classes e Encapsulamento | DIO | Concluído |
| Versionamento de Código com Git e GitHub | DIO | Concluído |

---

## 🧠 Habilidades

- **Frontend:** React, React Native, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap
- **Backend:** Node.js, Express, Laravel, Django, Python, Java, PHP, C
- **Banco de Dados:** MySQL, MongoDB, SQLite
- **DevOps & Ferramentas:** Git, GitHub, VSCode, AWS
- **Inteligência Artificial:** Engenharia de Prompt, LLMs, Automação com IA

---

## 👤 Autor

**Felipe Santos**
- 📍 Canguaretama — RN
- 🎓 Sistemas para Internet — IFRN
- 🎂 17 de fevereiro de 2004

---

## 📄 Licença

Este projeto é de uso pessoal e foi desenvolvido para fins acadêmicos.
