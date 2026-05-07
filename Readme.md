# 🏦 BankOps Dashboard

A full-stack transaction monitoring dashboard built for internal banking operations teams.

---

## 🏗️ Architecture

```text
React Frontend → Nginx → Spring Boot API → MySQL
                        ↕
                 Docker / Kubernetes
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot 3.5, Maven |
| Frontend | React, Vite, Recharts, Axios |
| Database | MySQL 8.0 |
| DevOps | Docker, Kubernetes, GitHub Actions |
| Cloud | AWS EKS, ECR |

---

## 🚀 Features

- Real-time transaction monitoring dashboard
- Credit/Debit summary cards
- Bar chart visualization by account
- Filter transactions by account number or status
- REST API with full CRUD operations
- Containerized using Docker and Nginx reverse proxy
- Kubernetes manifests for AWS EKS deployment
- CI/CD pipeline using GitHub Actions → Amazon ECR → Amazon EKS

---

## 📦 Run Locally

### ✅ Prerequisites

Make sure the following tools are installed:

- Docker Desktop
- Java 17
- Node.js 20
- Maven
- MySQL 8.0

---

### 🚀 Start with Docker Compose

```bash
docker-compose up --build
```

Open the application in browser:

```text
http://localhost:80
```

---

### ⚙️ Run Individually

#### Backend

```bash
cd backend/bankops-backend
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

#### Frontend

```bash
cd frontend/bankops-frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/transactions` | Get all transactions |
| GET | `/api/transactions/{id}` | Get transaction by ID |
| GET | `/api/transactions/account/{acc}` | Filter by account number |
| GET | `/api/transactions/status/{status}` | Filter by transaction status |
| GET | `/api/transactions/summary` | Get credit/debit totals |
| POST | `/api/transactions` | Create transaction |
| DELETE | `/api/transactions/{id}` | Delete transaction |

---

## 🗂️ Project Structure

```text
BankOps-Dashboard/
│
├── backend/
│   └── bankops-backend/        # Spring Boot REST API
│
├── frontend/
│   └── bankops-frontend/       # React Dashboard
│
├── k8s/                        # Kubernetes manifests
│
├── .github/
│   └── workflows/              # GitHub Actions CI/CD pipeline
│
├── docker-compose.yml
│
└── README.md
```

---

## ☁️ Deployment Workflow

```text
GitHub Push
     ↓
GitHub Actions CI/CD
     ↓
Docker Build & Push → Amazon ECR
     ↓
Deploy to AWS EKS Cluster
```

---

## 🐳 Docker Support

The project includes:

- Multi-stage Docker builds
- Backend containerization
- Frontend served using Nginx
- Docker Compose for local orchestration

---

## ☸️ Kubernetes Support

Kubernetes manifests are available for:

- Deployment
- Service
- Ingress
- Configurations for AWS EKS

---

## 🔄 CI/CD Pipeline

Implemented using GitHub Actions:

- Build frontend and backend
- Create Docker images
- Push images to Amazon ECR
- Deploy automatically to Amazon EKS

---

## 📸 Dashboard Preview

Features included in dashboard UI:

- Transaction table
- Credit/Debit analytics
- Account-wise visualization charts
- Status-based filtering
- Responsive dashboard layout

---

## 👨‍💻 Author

**Ganesh**  
Associate Software Engineer | DevOps & Cloud Enthusiast

---