# 📝 Todo List App
MERN-Based Todo Application with Secure Authentication and Task Management

---

## 🚀 Features
- ✅ Login Authentication (Token-based)
- 🆕 Add new tasks
- 🔁 Update task status (complete/incomplete)
- ❌ Delete tasks
- 🔒 Protected routes with JWT (only accessible when logged in)
- 💬 Toast notifications for actions
- 🧼 Clean and responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend:
- React
- Axios
- React Context API (for auth)
- React Toastify
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Hash password (with bcypt)
- JWT Authentication

---


## 📦 Installation

### 1. Clone the repo
```bash
git clone https://github.com/BuddhadevBauna/todoApp.git
cd todoApp
```

### 2. Install depandencies for frontend
```bash
  cd client
  npm install
```

### 2. Install depandencies for backend
```bash
  cd ../server
  npm install
```

## 3. Environment Variables Setup
- **Create a .env file in the server folder and add the following:**
  - PORT=server_default_port
  - MONGODB_URI=your_mongodb_connection_string
  - JWT_KEY=your_jwt_secret

- **Create a .env file in the client folder and add the following:**
  - VITE_API_BASE_URL=Your_server_running_route, that genrate after server run, that disscuss next step

---

## 🚀 Run the Application

## 1. Server run
```bash
  node server.js
```
## 2. client run
```bash
  cd ../client
  npm run dev
```