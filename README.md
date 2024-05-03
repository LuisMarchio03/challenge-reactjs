# Sistema de Gerenciamento de Clientes

Um sistema simples de gerenciamento de clientes desenvolvido com React e integrado a uma API RESTful.

## Funcionalidades

- Adicionar novos clientes com informações como nome, endereço, cidade, UF e telefone.
- Visualizar a lista de clientes cadastrados.
- Atualizar informações de clientes existentes.
- Excluir clientes da lista.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- React Router DOM: Para navegação entre diferentes telas da aplicação.
- Axios: Para fazer requisições HTTP para a API backend.
- TypeScript: Para adicionar tipagem estática ao JavaScript.
- Tailwind CSS: Para estilização rápida e responsiva.

## Configuração do Projeto

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Instalar Dependências**

 ```bash
    cd nome-do-repositorio
    npm install
   ```

3. **Configurar Variáveis de Ambiente**

- .env já está presente no projeto

2. **Executar o Projeto**

 ```bash
    npm run dev
   ```

## Estrutura do Projeto

```bash
src/
|-- components/
|   |-- Form.tsx
|   |-- Header.tsx
|   |-- Table.tsx
|-- screens/
|   |-- Create.tsx
|   |-- Home.tsx
|   |-- Update.tsx
|-- services/
|   |-- api.ts
|-- App.tsx
|-- index.tsx
|-- ...
```

- components/: Contém os componentes reutilizáveis da aplicação, como formulário (Form), cabeçalho (Header), e tabela (Table).

- screens/: Contém as telas principais da aplicação, como tela de criação (Create), tela inicial (Home), e tela de atualização (Update).

- services/: Contém o serviço de comunicação com a API (api.ts) usando Axios.
