# 🎵 Moodify

> AI-powered music recommendations based on your facial expression — detected in real time using your camera.

**Live Demo:** [moodify-frontend-2fcg.onrender.com](https://moodify-frontend-2fcg.onrender.com)

---

## ✨ Features

- 🎭 **Real-time mood detection** using MediaPipe Face Landmarker
- 🎵 **Mood-based song suggestions** — happy, sad, or surprised
- 🔐 **User authentication** — register, login, logout
- 🎧 **Full-featured music player** — play/pause, seek, volume, speed control
- 📱 **Responsive design** — works on mobile and desktop

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- React Router
- Axios
- SCSS
- MediaPipe Tasks Vision (face detection)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Redis (session caching)
- JWT Authentication
- ImageKit (media storage)
- Multer (file upload)

---

## 📁 Project Structure

```
Moodify/
├── Backend/
│   ├── src/
│   │   ├── config/          # DB and cache config
│   │   ├── controllers/     # Auth and song controllers
│   │   ├── middlewares/     # Auth and upload middlewares
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   └── services/        # ImageKit storage service
│   ├── server.js
│   └── .env
│
└── Frontend/
    └── src/
        └── features/
            ├── auth/        # Login, Register, Protected route
            ├── home/        # Home page, Music Player
            └── Expression/  # Face detection component
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js
- MongoDB Atlas account
- Redis instance
- ImageKit account

### 1. Clone the repo
```bash
git clone https://github.com/akshatsahay21/Moodify.git
cd Moodify
```

### 2. Setup Backend
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend:
```bash
node server.js
```

### 3. Setup Frontend
```bash
cd Frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/get-me` | Get current user |
| GET | `/api/auth/logout` | Logout user |

### Songs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/songs?mood=happy` | Get random song by mood |
| POST | `/api/songs` | Upload a new song |

---

## 😊 How It Works

1. User logs in / registers
2. Camera opens and MediaPipe loads the face detection model
3. User clicks **"Detect my mood"**
4. Face blendshapes are analyzed to detect: `happy`, `sad`, or `surprised`
5. A random song matching that mood is fetched from the database
6. Song plays in the bottom music player

---

## 📸 Screenshots

> Login Page
<img width="1919" height="957" alt="Screenshot 2026-04-14 144633" src="https://github.com/user-attachments/assets/4246b06c-a3c5-48dc-8a71-1b22af25d998" />




> · Home Page
> <img width="1920" height="1080" alt="Screenshot 2026-04-14 144653" src="https://github.com/user-attachments/assets/604c93d5-4b25-4c65-8d2c-330f1ecba610" />


---

## 👨‍💻 Author

**Akshat Sahay**
- GitHub: [@akshatsahay21](https://github.com/akshatsahay21)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
