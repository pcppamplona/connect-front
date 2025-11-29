# Projeto LOJA X - Desafio Técnico

## Visão Geral
Aplicação para criar pedidos, gerar PIX via AbacatePay e notificar clientes via WhatsApp.

## Estrutura do projeto
- `backend/`: API construída com NestJS
- `frontend/`: SPA construída com React + TypeScript

## Rodando o projeto localmente

### Backend
1. Instalar dependências: `npm install`
2. Criar arquivo `.env` com as chaves:

3. Rodar a aplicação: `npm run start:dev`
4. Endpoints principais:
- `POST /orders` → cria pedido
- `GET /orders/check/:id` → verifica status do pedido
- `POST /orders/simulate/:id` → simula pagamento

### Frontend
1. Instalar dependências: `npm install`
2. Rodar a aplicação: `npm run dev`
3. Acesse em `http://localhost:5173/`

## Bibliotecas utilizadas

### Backend
- **NestJS**: estrutura robusta para APIs REST
- **Axios**: integração com AbacatePay e Evolution
- **class-validator / class-transformer**: validação de DTOs

### Frontend
- **React + TypeScript**: construção do SPA
- **React Query**: gerenciamento de requisições e cache
- **TailwindCSS**: estilização rápida e responsiva
- **React Hot Toast**: feedback visual para o usuário (pagamento realizado)

## Observações
- O fluxo de pagamento simulado atualiza o status do pedido e envia notificação via WhatsApp.
- Evite adicionar dependências desnecessárias para manter o projeto leve.
