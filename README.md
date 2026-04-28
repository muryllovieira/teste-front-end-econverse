# Econverse — Teste Front-End Jr

Econverse é uma landing page de e-commerce desenvolvida como solução para o desafio técnico da vaga de **Desenvolvedor Front-End Jr na Econverse**. O projeto consome dados de um arquivo JSON externo e exibe uma lista de produtos com modal de detalhes, seguindo layout pixel a pixel conforme o Figma fornecido.

---

## 📱 Sobre o Projeto

A Econverse propôs a criação de uma single page application que simula uma vitrine de produtos real. O desafio envolveu consumo de API externa, interação com modal de produto, responsividade completa e boas práticas de código — sem o uso de bibliotecas de UI como Bootstrap ou Foundation.

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Sass](https://sass-lang.com/) — estilização com variáveis e mixins globais
- [Axios](https://axios-http.com/) — consumo de API
- [Lucide React](https://lucide.dev/) — ícones
- ESLint — padronização de código

---

## 📁 Estrutura de Pastas

```
src/
├── @types/               # Tipagens globais (Product, Request, etc.)
├── assets/               # Imagens e recursos estáticos
├── data/
│   └── Product/          # Context API e Providers globais
├── presentation/
│   └── atomic/
│       ├── atoms/        # Componentes base (Button, Input, SearchBar...)
│       ├── molecules/    # Composições de átomos
│       ├── organisms/    # Seções completas (Header, HeroBanner...)
│       └── templates/    # Layout de páginas
├── service/
│   └── axios.ts          # Instância e configuração do Axios
├── styles/
│   ├── _variables.scss   # Tokens de design (cores, tipografia, espaçamentos)
│   ├── _mixins.scss      # Mixins de responsividade e utilitários
│   └── global.scss       # Reset e estilos globais
├── App.tsx               # Componente raiz
└── main.tsx              # Ponto de entrada
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🔧 Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/muryllovieira/teste-front-end-econverse.git
cd teste-front-end-econverse
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
VITE_API_URL=/api/teste-front-end/junior/tecnologia
```

> ⚠️ Sem o `.env` configurado, o consumo de dados externos não irá funcionar no ambiente local.

---

## ▶️ Como Rodar

```bash
# Iniciar o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

```bash
# Gerar build de produção
npm run build

# Visualizar build localmente
npm run preview
```

---

## 🏗️ Arquitetura

O projeto segue os princípios de **Atomic Design** na camada de apresentação, organizando os componentes em quatro níveis:

- **`atoms/`** — componentes base e indivisíveis (Button, TextInput, SearchBar, Checkbox...)
- **`molecules/`** — composições simples de átomos com responsabilidade única
- **`organisms/`** — seções completas da interface (Header, HeroBanner, ProductList...)
- **`templates/`** — estrutura de layout das páginas

A estilização é feita com **Sass modular** por componente (`style.module.scss`), com tokens centralizados em `_variables.scss` e mixins de responsividade em `_mixins.scss`.

---

## 📄 Observações

- O layout foi seguido fielmente conforme o Figma
- O projeto é acessível via teclado e fecha o modal ao pressionar `ESC`
- Utiliza HTML semântico e boas práticas de SEO (tags, headings, meta tags)
- Responsividade garantida via CSS Grid/Flexbox e media queries

---

## 👤 Autor

Desenvolvido por [Muryllo Vieira](https://github.com/muryllovieira) para o processo seletivo da Econverse.
