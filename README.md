# **Big Chat Brasil - README**

## **Visão Geral**
Este projeto implementa o sistema Big Chat Brasil (BCB), que permite o envio de mensagens via SMS ou WhatsApp, com gerenciamento de clientes pré-pagos e pós-pagos.

---

## **Como Executar o Projeto**

### **1. Pré-Requisitos**
Certifique-se de ter instalado:
- Docker e Docker Compose

### **2. Passos para Subir o Projeto**
1. Clone o repositório:
```bash
git clone https://github.com/Carlos0liveira/BCB.git
cd bcb
```
2. Construa e execute os containers:
```bash
docker-compose up --build
```
3. Acesse os serviços:
- **Frontend:** `http://localhost:3000`
 -- Realizar login com o usuário padrão 
 --- Email: admin@email.com
 --- Senha: admin
- **Backend:** `http://localhost:8080`

---

## **Estrutura do Projeto**

```
/big-chat-brasil
├── backend/                # Código do backend (Spring Boot)
├── frontend/               # Código do frontend (Next.js)
├── docker-compose.yml      # Orquestração dos containers
└── README.md               # Este arquivo
```